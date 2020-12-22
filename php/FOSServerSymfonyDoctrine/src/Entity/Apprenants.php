<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ApprenantsRepository")
 */
class Apprenants
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $nom;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $prenom;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $genre;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $date_de_naissance;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $adresse;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $code_postale;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=20, nullable=true)
     */
    private $telephone;





    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Situations", mappedBy="idapprenant")
     */
    private $situations;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Groupes", mappedBy="apprenantLink")
     */
    private $groupeLink;




    
    public function __construct()
    {
        $this->situations = new ArrayCollection();
        $this->groupeLink = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(?string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getPrenom(): ?string
    {
        return $this->prenom;
    }

    public function setPrenom(?string $prenom): self
    {
        $this->prenom = $prenom;

        return $this;
    }

    public function getGenre(): ?int
    {
        return $this->genre;
    }

    public function setGenre(?int $genre): self
    {
        $this->genre = $genre;

        return $this;
    }

    public function getDateDeNaissance(): ?\DateTimeInterface
    {
        return $this->date_de_naissance;
    }

    public function setDateDeNaissance(?\DateTimeInterface $date_de_naissance): self
    {
        $this->date_de_naissance = $date_de_naissance;

        return $this;
    }

    public function getAdresse(): ?string
    {
        return $this->adresse;
    }

    public function setAdresse(?string $adresse): self
    {
        $this->adresse = $adresse;

        return $this;
    }

    public function getCodePostale(): ?int
    {
        return $this->code_postale;
    }

    public function setCodePostale(?int $code_postale): self
    {
        $this->code_postale = $code_postale;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getTelephone(): ?string
    {
        return $this->telephone;
    }

    public function setTelephone(?string $telephone): self
    {
        $this->telephone = $telephone;

        return $this;
    }

    /**
     * @return Collection|Groupes[]
     */
    public function getApprenantsLink(): Collection
    {
        return $this->apprenantsLink;
    }

    public function addApprenantsLink(Groupes $apprenantsLink): self
    {
        if (!$this->apprenantsLink->contains($apprenantsLink)) {
            $this->apprenantsLink[] = $apprenantsLink;
            $apprenantsLink->addApprenantsRelation($this);
        }

        return $this;
    }

    public function removeApprenantsLink(Groupes $apprenantsLink): self
    {
        if ($this->apprenantsLink->contains($apprenantsLink)) {
            $this->apprenantsLink->removeElement($apprenantsLink);
            $apprenantsLink->removeApprenantsRelation($this);
        }

        return $this;
    }

    /**
     * @return Collection|Groupes[]
     */
    public function getGroupeLink(): Collection
    {
        return $this->groupeLink;
    }

    public function addGroupeLink(Groupes $groupeLink): self
    {
        if (!$this->groupeLink->contains($groupeLink)) {
            $this->groupeLink[] = $groupeLink;
            $groupeLink->addApprenantLink($this);
        }

        return $this;
    }

    public function removeGroupeLink(Groupes $groupeLink): self
    {
        if ($this->groupeLink->contains($groupeLink)) {
            $this->groupeLink->removeElement($groupeLink);
            $groupeLink->removeApprenantLink($this);
        }

        return $this;
    }
}
