<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Apprenants;
use App\Repository\ApprenantsRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use JMS\Serializer\SerializerBuilder;
use Symfony\Component\HttpFoundation\Request;

class ApprenantsController extends AbstractController
{

    // Connection au repository de l'entité, rend disponible partout le repo en faisant $this->repository()
    /**
     * @var ApprenantsRepository
     */
    private $repository;

    public function __construct(ApprenantsRepository $repository)
    {
        $this->repository = $repository;
    }

    public function index(ApprenantsRepository $apprenantsRepository)
    {
        $apprenants = $apprenantsRepository->transformAll();
        return $this->respond($apprenants);
    }

    /**
     * @Route("/apprenants", name="apprenantGet", methods="GET")
     * 
     */
    public function findAllItem()
    {
        //initialise le serializer et la reponse
        $serializer = SerializerBuilder::create()->build();
        $response = new Response;
        //recupere le contenu de la table
        $apprenant = $this->getDoctrine()->getRepository(Apprenants::class)->findAll();
        //conditionne en json
        $apprenant = $serializer->serialize($apprenant, 'json');
        $response->setContent($apprenant);
        //ajoute l'etiquette
        $response->headers->set('Content-Type', 'application/json');
        //envoie la reponse
        return $response;
    }

    /**
    * @Route("/apprenants", methods="POST")
    */
    public function addApprenant(Request $request, ApprenantsRepository $apprenantRepository, EntityManagerInterface $em)
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
        // persist the new apprenant
        $apprenant = new Apprenants;
        $apprenant->setIntitule($request->get('intitule'));
        $apprenant->setActive(true);
        $em->persist($apprenant);
        $em->flush();
        return $this->respond([
            'id' => $apprenant->getId(),
            'intitule' => $apprenant->getIntitule(),
            'active' => $apprenant->getActive()
        ]);
    }

    /**
    * @Route("/apprenants/delete/{id}", methods="GET")
    */
    public function delete($id, EntityManagerInterface $em, ApprenantsRepository $apprenantRepository)
    {
        $apprenant = $apprenantRepository->find($id);
        $apprenant->getId($apprenant);
        $em->remove($apprenant);
        $em->flush();
        return $this->respond([
            'id' => $apprenant->getId(),
        ]);
    }
}
