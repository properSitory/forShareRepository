<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Users;
use App\Repository\UsersRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use JMS\Serializer\SerializerBuilder;
use Symfony\Component\HttpFoundation\Request;

class UsersController extends AbstractController
{

    // Connection au repository de l'entité, rend disponible partout le repo en faisant $this->repository()
    /**
     * @var UsersRepository
     */
    private $repository;

    public function __construct(UsersRepository $repository)
    {
        $this->repository = $repository;
    }

    public function index(UsersRepository $usersRepository)
    {
        $users = $usersRepository->transformAll();
        return $this->respond($users);
    }

    /**
     * @Route("/users", name="userGet", methods="GET")
     * 
     */
    public function findAll()
    {
        //initialise le serializer et la reponse
        $serializer = SerializerBuilder::create()->build();
        $response = new Response;
        //recupere le contenu de la table
        $user = $this->getDoctrine()->getRepository(Users::class)->findAll();
        //conditionne en json
        $user = $serializer->serialize($user, 'json');
        $response->setContent($user);
        //ajoute l'etiquette
        $response->headers->set('Content-Type', 'application/json');
        //envoie la reponse
        return $response;
    }

    /**
    * @Route("/users", methods="POST")
    */
    public function addUser(Request $request, UsersRepository $userRepository, EntityManagerInterface $em)
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
        if (! $request->get('nom')) {
            return $this->respondValidationError('Please provide a intitulé!');
        }
        // persist the new user
        $user = new Users;
        $user->setNom($request->get('nom'));
        $user->setPrenom($request->get('prenom'));
        $em->persist($user);
        $em->flush();
        return $this->respond([
            'id' => $user->getId(),
            'nom' => $user->getNom(),
            'prenom' => $user->getPrenom()
        ]);
    }

    /**
    * @Route("/users/delete/{id}", methods="GET")
    */
    public function delete($id, EntityManagerInterface $em, UsersRepository $userRepository)
    {
        $user= $userRepository->find($id);
        $user->getId($user);
        $em->remove($user);
        $em->flush();
        return $this->respond([
            'id' => $user->getId(),
        ]);
    }
}
