<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\SituationsRepository")
 */
class Situations
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string")
     */
    private $typeContrat;

    /**
     * @ORM\Column(type="date")
     */
    private $dateDebut;

    /**
     * @ORM\Column(type="date")
     */
    private $dateFin;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $employeur;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $intitulePoste;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $listeFormationSuivies;

    /**
     * @ORM\Column(type="text")
     */
    private $commentaire;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Apprenants", inversedBy="situations")
     * @ORM\JoinColumn(nullable=false)
     */
    private $idapprenant;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTypeContrat(): ?int
    {
        return $this->typeContrat;
    }

    public function setTypeContrat(int $typeContrat): self
    {
        $this->typeContrat = $typeContrat;

        return $this;
    }

    public function getDateDebut(): ?\DateTimeInterface
    {
        return $this->dateDebut;
    }

    public function setDateDebut(\DateTimeInterface $dateDebut): self
    {
        $this->dateDebut = $dateDebut;

        return $this;
    }

    public function getDateFin(): ?\DateTimeInterface
    {
        return $this->dateFin;
    }

    public function setDateFin(\DateTimeInterface $dateFin): self
    {
        $this->dateFin = $dateFin;

        return $this;
    }

    public function getEmployeur(): ?string
    {
        return $this->employeur;
    }

    public function setEmployeur(string $employeur): self
    {
        $this->employeur = $employeur;

        return $this;
    }

    public function getIntitulePoste(): ?string
    {
        return $this->intitulePoste;
    }

    public function setIntitulePoste(string $intitulePoste): self
    {
        $this->intitulePoste = $intitulePoste;

        return $this;
    }

    public function getListeFormationSuivies(): ?string
    {
        return $this->listeFormationSuivies;
    }

    public function setListeFormationSuivies(string $listeFormationSuivies): self
    {
        $this->listeFormationSuivies = $listeFormationSuivies;

        return $this;
    }

    public function getCommentaire(): ?string
    {
        return $this->commentaire;
    }

    public function setCommentaire(string $commentaire): self
    {
        $this->commentaire = $commentaire;

        return $this;
    }

    public function getIdapprenant(): ?Apprenants
    {
        return $this->idapprenant;
    }

    public function setIdapprenant(?Apprenants $idapprenant): self
    {
        $this->idapprenant = $idapprenant;

        return $this;
    }
}
