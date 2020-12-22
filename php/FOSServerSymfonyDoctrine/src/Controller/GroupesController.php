<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Groupes;
use App\Repository\GroupesRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use JMS\Serializer\SerializerBuilder;
use Symfony\Component\HttpFoundation\Request;

class GroupesController extends AbstractController
{

    // Connection au repository de l'entité, rend disponible partout le repo en faisant $this->repository()
    /**
     * @var GroupesRepository
     */
    private $repository;

    public function __construct(GroupesRepository $repository)
    {
        $this->repository = $repository;
    }

    public function index(GroupesRepository $groupesRepository)
    {
        $groupes = $groupesRepository->transformAll();
        return $this->respond($groupes);
    }

    /**
     * @Route("/groupes", name="groupeGet", methods="GET")
     * 
     */
    public function findAllItem()
    {
        //initialise le serializer et la reponse
        $serializer = SerializerBuilder::create()->build();
        $response = new Response;
        //recupere le contenu de la table
        $groupe = $this->getDoctrine()->getRepository(Groupes::class)->findAll();
        //conditionne en json
        $groupe = $serializer->serialize($groupe, 'json');
        $response->setContent($groupe);
        //ajoute l'etiquette
        $response->headers->set('Content-Type', 'application/json');
        //envoie la reponse
        return $response;
    }

    /**
    * @Route("/groupes", methods="POST")
    */
    public function addGroupe(Request $request, GroupesRepository $groupeRepository, EntityManagerInterface $em)
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
        // persist the new groupe
        $groupe = new Groupes;
        $groupe->setIntitule($request->get('intitule'));
        $groupe->setActive(true);
        $em->persist($groupe);
        $em->flush();
        return $this->respond([
            'id' => $groupe->getId(),
            'intitule' => $groupe->getIntitule(),
            'active' => $groupe->getActive()
        ]);
    }

    /**
    * @Route("/groupes/delete/{id}", methods="GET")
    */
    public function delete($id, EntityManagerInterface $em, GroupesRepository $groupeRepository)
    {
        $groupe = $groupeRepository->find($id);
        $groupe->getId($groupe);
        $em->remove($groupe);
        $em->flush();
        return $this->respond([
            'id' => $groupe->getId(),
        ]);
    }
}
