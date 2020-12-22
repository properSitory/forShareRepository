<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Formations;
use App\Repository\FormationsRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use JMS\Serializer\SerializerBuilder;
use Symfony\Component\HttpFoundation\Request;

class FormationsController extends AbstractController
{

    // Connection au repository de l'entité, rend disponible partout le repo en faisant $this->repository()
    /**
     * @var FormationsRepository
     */
    private $repository;

    public function __construct(FormationsRepository $repository)
    {
        $this->repository = $repository;
    }

    public function index(FormationsRepository $formationsRepository)
    {
        $formations = $formationsRepository->transformAll();
        return $this->respond($formations);
    }

    /**
     * @Route("/formations", name="formationGet", methods="GET")
     * 
     */
    public function findAllItem()
    {
        //initialise le serializer et la reponse
        $serializer = SerializerBuilder::create()->build();
        $response = new Response;
        //recupere le contenu de la table
        $formation = $this->getDoctrine()->getRepository(Formations::class)->findAll();
        //conditionne en json
        $formation = $serializer->serialize($formation, 'json');
        $response->setContent($formation);
        //ajoute l'etiquette
        $response->headers->set('Content-Type', 'application/json');
        //envoie la reponse
        return $response;
    }

    /**
    * @Route("/formations", methods="POST")
    */
    public function addSecteur(Request $request, FormationsRepository $formationRepository, EntityManagerInterface $em)
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
        // persist the new formation
        $formation = new Formations;
        $formation->setIntitule($request->get('intitule'));
        $formation->setActive(true);
        $em->persist($formation);
        $em->flush();
        return $this->respond([
            'id' => $formation->getId(),
            'intitule' => $formation->getIntitule(),
            'active' => $formation->getActive()
        ]);
    }

    /**
    * @Route("/formations/delete/{id}", methods="GET")
    */
    public function delete($id, EntityManagerInterface $em, FormationsRepository $formationRepository)
    {
        $formation = $formationRepository->find($id);
        $formation->getId($formation);
        $em->remove($formation);
        $em->flush();
        return $this->respond([
            'id' => $formation->getId(),
        ]);
    }
}
