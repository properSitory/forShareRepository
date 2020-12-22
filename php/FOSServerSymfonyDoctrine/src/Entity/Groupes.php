<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\GroupesRepository")
 */
class Groupes
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
    private $intitule;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $active;





    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Formations", inversedBy="groupes")
     */
    private $formationLink;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Annees", inversedBy="groupe_link")
     */
    private $anneeLink;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Apprenants", inversedBy="groupeLink")
     */
    private $apprenantLink;





    public function __construct()
    {
        $this->apprenantLink = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIntitule(): ?string
    {
        return $this->intitule;
    }

    public function setIntitule(?string $intitule): self
    {
        $this->intitule = $intitule;

        return $this;
    }

    public function getActive(): ?bool
    {
        return $this->active;
    }

    public function setActive(?bool $active): self
    {
        $this->active = $active;

        return $this;
    }

    public function getFormationLink(): ?Formations
    {
        return $this->formationLink;
    }

    public function setFormationLink(?Formations $formationLink): self
    {
        $this->formationLink = $formationLink;

        return $this;
    }

    /**
     * @return Collection|Apprenants[]
     */
    public function getApprenantLink(): Collection
    {
        return $this->apprenantLink;
    }

    public function addApprenantLink(Apprenants $apprenantLink): self
    {
        if (!$this->apprenantLink->contains($apprenantLink)) {
            $this->apprenantLink[] = $apprenantLink;
        }

        return $this;
    }

    public function removeApprenantLink(Apprenants $apprenantLink): self
    {
        if ($this->apprenantLink->contains($apprenantLink)) {
            $this->apprenantLink->removeElement($apprenantLink);
        }

        return $this;
    }

     /**
     * @return Collection|Annees[]
     */
    public function getAnneeLink(): Collection
    {
        return $this->anneeLink;
    }

    public function addAnneeLink(Annees $anneeLink): self
    {
        if (!$this->anneeLink->contains($anneeLink)) {
            $this->anneeLink[] = $anneeLink;
        }

        return $this;
    }

    public function removeAnneeLink(Annees $anneeLink): self
    {
        if ($this->anneeLink->contains($anneeLink)) {
            $this->anneeLink->removeElement($anneeLink);
        }

        return $this;
    }
}
