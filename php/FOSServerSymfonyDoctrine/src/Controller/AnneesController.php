<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Annees;
use App\Repository\AnneesRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use JMS\Serializer\SerializerBuilder;
use Symfony\Component\HttpFoundation\Request;

class AnneesController extends AbstractController
{
    // Connection au repository de l'entité, rend disponible partout le repo en faisant $this->repository()
    /**
     * @var AnneesRepository
     */
    private $repository;

    public function __construct(AnneesRepository $repository)
    {
        $this->repository = $repository;
    }

    public function index(AnneesRepository $anneesRepository)
    {
        $annees = $anneesRepository->transformAll();
        return $this->respond($annees);
    }

    /**
     * @Route("/annees", name="anneeGet", methods="GET")
     * 
     */
    public function findAllItem()
    {
        //initialise le serializer et la reponse
        $serializer = SerializerBuilder::create()->build();
        $response = new Response;
        //recupere le contenu de la table
        $annee = $this->getDoctrine()->getRepository(Annees::class)->findAll();
        //conditionne en json
        $annee = $serializer->serialize($annee, 'json');
        $response->setContent($annee);
        //ajoute l'etiquette
        $response->headers->set('Content-Type', 'application/json');
        //envoie la reponse
        return $response;
    }

    /**
    * @Route("/annees", methods="POST")
    */
    public function addAnnee(Request $request, AnneesRepository $anneeRepository, EntityManagerInterface $em)
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
        // persist the new annee
        $annee = new Annees;
        $annee->setIntitule($request->get('intitule'));
        $annee->setActive(true);
        $em->persist($annee);
        $em->flush();
        return $this->respond([
            'id' => $annee->getId(),
            'intitule' => $annee->getIntitule(),
            'active' => $annee->getActive()
        ]);
    }

    /**
    * @Route("/annees/delete/{id}", methods="GET")
    */
    public function delete($id, EntityManagerInterface $em, AnneesRepository $anneeRepository)
    {
        $annee = $anneeRepository->find($id);
        $annee->getId($annee);
        $em->remove($annee);
        $em->flush();
        return $this->respond([
            'id' => $annee->getId(),
        ]);
    }
}
