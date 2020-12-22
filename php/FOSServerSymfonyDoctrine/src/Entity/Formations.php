<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\FormationsRepository")
 */
class Formations
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50)
     * @ORM\Column(nullable=true)
     */
    private $intitule;

    /**
     * @ORM\Column(type="boolean")
     * @ORM\Column(nullable=true)
     */
    private $active;

    /**
    * @ORM\OneToMany(targetEntity="App\Entity\Groupes", mappedBy="formationLink")
    */
    private $groupes;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Secteurs", inversedBy="formations")
     */
    private $idsecteur;

    public function __construct()
    {
        $this->groupes = new ArrayCollection();
        $this->groupeLink = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIntitule(): ?string
    {
        return $this->intitule;
    }

    public function setIntitule(string $intitule): self
    {
        $this->intitule = $intitule;

        return $this;
    }

    public function getActive(): ?bool
    {
        return $this->active;
    }

    public function setActive(bool $active): self
    {
        $this->active = $active;

        return $this;
    }

    public function getIdsecteur(): ?Secteurs
    {
        return $this->idsecteur;
    }

    public function setIdsecteur(?Secteurs $idsecteur): self
    {
        $this->idsecteur = $idsecteur;

        return $this;
    }

    /**
     * @return Collection|Groupes[]
     */
    public function getGroupes(): Collection
    {
        return $this->groupes;
    }

    public function addGroupe(Groupes $groupe): self
    {
        if (!$this->groupes->contains($groupe)) {
            $this->groupes[] = $groupe;
            $groupe->setIdformation($this);
        }

        return $this;
    }

    public function removeGroupe(Groupes $groupe): self
    {
        if ($this->groupes->contains($groupe)) {
            $this->groupes->removeElement($groupe);
            // set the owning side to null (unless already changed)
            if ($groupe->getIdformation() === $this) {
                $groupe->setIdformation(null);
            }
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
            $groupeLink->setFormationLink($this);
        }

        return $this;
    }

    public function removeGroupeLink(Groupes $groupeLink): self
    {
        if ($this->groupeLink->contains($groupeLink)) {
            $this->groupeLink->removeElement($groupeLink);
            // set the owning side to null (unless already changed)
            if ($groupeLink->getFormationLink() === $this) {
                $groupeLink->setFormationLink(null);
            }
        }

        return $this;
    }
}
