<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AnneesRepository")
 */
class Annees
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
    private $dateDebut;

    /**
     * @ORM\Column(type="string")
     */
    private $dateFin;







    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Groupes", mappedBy="anneeLink")
     * @ORM\Column(nullable=false)
     */
    private $groupe_link;










    public function __construct()
    {
        $this->groupe_link = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    /**
     * @return Collection|Groupes[]
     */
    public function getAnneesGroupes(): Collection
    {
        return $this->anneesGroupes;
    }

    public function addAnneesGroupe(Groupes $anneesGroupe): self
    {
        if (!$this->anneesGroupes->contains($anneesGroupe)) {
            $this->anneesGroupes[] = $anneesGroupe;
            $anneesGroupe->setAnneesLink($this);
        }

        return $this;
    }

    public function removeAnneesGroupe(Groupes $anneesGroupe): self
    {
        if ($this->anneesGroupes->contains($anneesGroupe)) {
            $this->anneesGroupes->removeElement($anneesGroupe);
            // set the owning side to null (unless already changed)
            if ($anneesGroupe->getAnneesLink() === $this) {
                $anneesGroupe->setAnneesLink(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Groupes[]
     */
    public function getGroupe_link(): Collection
    {
        return $this->groupe_link;
    }

    public function addGroupe_link(Groupes $groupe_link): self
    {
        if (!$this->groupe_link->contains($groupe_link)) {
            $this->groupe_link[] = $groupe_link;
            $groupe_link->setGroupe_link($this);
        }

        return $this;
    }

    public function removeGroupeLink(Groupes $groupe_link): self
    {
        if ($this->groupe_link->contains($groupe_link)) {
            $this->groupe_link->removeElement($groupe_link);
            // set the owning side to null (unless already changed)
            if ($groupe_link->getGroupe_link() === $this) {
                $groupe_link->setGroupe_link(null);
            }
        }

        return $this;
    }
}
