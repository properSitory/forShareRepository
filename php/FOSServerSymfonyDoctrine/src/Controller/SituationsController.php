<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Situations;
use App\Repository\SituationsRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use JMS\Serializer\SerializerBuilder;
use Symfony\Component\HttpFoundation\Request;

class SituationsController extends AbstractController
{

    // Connection au repository de l'entité, rend disponible partout le repo en faisant $this->repository()
    /**
     * @var SituationsRepository
     */
    private $repository;

    public function __construct(SituationsRepository $repository)
    {
        $this->repository = $repository;
    }

    public function index(SituationsRepository $situationsRepository)
    {
        $situations = $situationsRepository->transformAll();
        return $this->respond($situations);
    }

    /**
     * @Route("/situations", name="situationGet", methods="GET")
     * 
     */
    public function findAll()
    {
        //initialise le serializer et la reponse
        $serializer = SerializerBuilder::create()->build();
        $response = new Response;
        //recupere le contenu de la table
        $situation = $this->getDoctrine()->getRepository(Situations::class)->findAll();
        //conditionne en json
        $situation = $serializer->serialize($situation, 'json');
        $response->setContent($situation);
        //ajoute l'etiquette
        $response->headers->set('Content-Type', 'application/json');
        //envoie la reponse
        return $response;
    }

    /**
    * @Route("/situations", methods="POST")
    */
    public function addSituation(Request $request, SituationsRepository $situationRepository, EntityManagerInterface $em)
    {
        // secu
        // if (! $this->isAuthorized()) {
        //     return $this->respondUnauthorized();
        // }
        $request = $this->transformJsonBody($request);       
        if (! $request) {
            return $this->respondValidationError('Please provide a valid request!');
        }
        // validate the intitulé
        if (! $request->get('intitule')) {
            return $this->respondValidationError('Please provide a intitulé!');
        }
        // persist the new situation
        $situation = new Situations;
        $situation->setIntitule($request->get('intitule'));
        $situation->setActive(true);
        $em->persist($situation);
        $em->flush();
        return $this->respond([
            'id' => $situation->getId(),
            'intitule' => $situation->getIntitule(),
            'active' => $situation->getActive()
        ]);
    }

    /**
    * @Route("/situations/delete/{id}", methods="GET")
    */
    public function delete($id, EntityManagerInterface $em, SituationsRepository $situationRepository)
    {
        $situation= $situationRepository->find($id);
        $situation->getId($situation);
        $em->remove($situation);
        $em->flush();
        return $this->respond([
            'id' => $situation->getId(),
        ]);
    }
}
