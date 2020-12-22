<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Secteurs;
use App\Repository\SecteursRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use JMS\Serializer\SerializerBuilder;
use Symfony\Component\HttpFoundation\Request;

class SecteursController extends AbstractController
{

    // Connection au repository de l'entité, rend disponible partout le repo en faisant $this->repository()
    /**
     * @var SecteursRepository
     */
    private $repository;

    public function __construct(SecteursRepository $repository)
    {
        $this->repository = $repository;
    }

    public function index(SecteursRepository $secteursRepository)
    {
        $secteurs = $secteursRepository->transformAll();
        return $this->respond($secteurs);
    }

    /**
     * @Route("/secteurs", name="secteurGet", methods="GET")
     * 
     */
    public function findAllItem()
    {
        //initialise le serializer et la reponse
        $serializer = SerializerBuilder::create()->build();
        $response = new Response;
        //recupere le contenu de la table
        $secteur = $this->getDoctrine()->getRepository(Secteurs::class)->findAll();
        //conditionne en json
        $secteur = $serializer->serialize($secteur, 'json');
        $response->setContent($secteur);
        //ajoute l'etiquette
        $response->headers->set('Content-Type', 'application/json');
        //envoie la reponse
        return $response;
    }

    /**
    * @Route("/secteurs", methods="POST")
    */
    public function addSecteur(Request $request, SecteursRepository $secteurRepository, EntityManagerInterface $em)
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
        // persist the new secteur
        $secteur = new Secteurs;
        $secteur->setIntitule($request->get('intitule'));
        $secteur->setActive(true);
        $em->persist($secteur);
        $em->flush();
        return $this->respond([
            'id' => $secteur->getId(),
            'intitule' => $secteur->getIntitule(),
            'active' => $secteur->getActive()
        ]);
    }

    /**
    * @Route("/secteurs/delete/{id}", methods="GET")
    */
    public function delete($id, EntityManagerInterface $em, SecteursRepository $secteurRepository)
    {
        $secteur = $secteurRepository->find($id);
        $secteur->getId($secteur);
        $em->remove($secteur);
        $em->flush();
        return $this->respond([
            'id' => $secteur->getId(),
        ]);
    }
}
