<?php

namespace App\Repository;

use App\Entity\Situations;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Situations|null find($id, $lockMode = null, $lockVersion = null)
 * @method Situations|null findOneBy(array $criteria, array $orderBy = null)
 * @method Situations[]    findAll()
 * @method Situations[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SituationsRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Situations::class);
    }

    public function transform(Situations $situation)
    {
        return [
            'id'    => (int) $situation->getId(),
            'intitule' => (string) $situation->getIntitule(),
            'active' => (bool) $situation->getActive()
        ];
    }

    public function transformAll()
    {
        $situations = $this->findAll();
        $situationsArray = [];

        foreach ($situations as $situation) {
            $situationsArray[] = $this->transform($situation);
        }

        return $situationsArray;
    }

     /**
      * @return Situations[] Returns an array of Situations objects
      */
    
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }

    public function findOneBySomeField($value): ?Situations
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }  
}
