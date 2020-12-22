import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Output } from '@angular/core';
import { Secteur } from "../services/Secteur";
import { SecteurService } from '../services/secteur.service';
import { Formation } from "../services/Formation";
import { FormationService } from '../services/formation.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-gestion-donnees',
  templateUrl: './gestion-donnees.component.html',
  styleUrls: ['./gestion-donnees.component.scss']
})

export class GestionDonneesComponent implements OnInit {
  ngOnInit() {
}}

export class SecteurComponent implements OnInit {

  secteurs: Secteur[];
  errorMessage: string;
  isLoading: boolean = true;
  idSecteur: number | string;
  intituleSecteur:string;

  constructor(private http:HttpClient, private secteurService: SecteurService) { }

  @Output()
  private _secteurAdded: EventEmitter<Secteur> = new EventEmitter<Secteur>();
  public get secteurAdded(): EventEmitter<Secteur> {
    return this._secteurAdded;
  }
  public set secteurAdded(value: EventEmitter<Secteur>) {
    this._secteurAdded = value;
  }

  ngOnInit() {
    this.getSecteurs()
  }

  getSecteurs()
  {
    this.secteurService
      .getSecteurs()
      .subscribe(
        secteurs => {
          this.secteurs = secteurs;
          this.isLoading = false;
        },
        error => this.errorMessage = <any>error);
      ;
  }

  findSecteur(id): Secteur {
    return this.secteurs.find(secteur => secteur.id === id);
    
  }

  isUpdating(id): boolean {
    return this.findSecteur(id).isUpdating;
  }

  
  appendSecteur(secteur: Secteur) {
    this.secteurs.push(secteur);
    this.isLoading = false;
  }

  deleteSecteur(id){
    let secteur = this.findSecteur(id);
    secteur.isUpdating = true;
    this.secteurService
      .deleteSecteur(id)
      .subscribe(
        response => {
          // Ces ligne là font disparaitre de l'affichage mais ne réduisent pas le tableau,
          // ça met seulement à jour angular
          // secteur.id = response.id;
          // secteur.intitule = response.intitule;
          // secteur.active = response.active;
          secteur.isUpdating = false;
        },
        error => {
          this.errorMessage = <any>error;
          secteur.isUpdating = false;
        }
      );
  }
  
}


export class FormationComponent implements OnInit {

  formations: Formation[];
  errorMessage: string;
  isLoading: boolean = true;
  idFormation: number | string;
  intituleFormation:string;

  constructor(private http:HttpClient, private formationService: FormationService) { }

  @Output()
  private _formationAdded: EventEmitter<Formation> = new EventEmitter<Formation>();
  public get formationAdded(): EventEmitter<Formation> {
    return this._formationAdded;
  }
  public set formationAdded(value: EventEmitter<Formation>) {
    this._formationAdded = value;
  }

  ngOnInit() {
    this.getFormations()
  }

  getFormations()
  {
    this.formationService
      .getFormations()
      .subscribe(
        formations => {
          this.formations = formations;
          this.isLoading = false;
        },
        error => this.errorMessage = <any>error);
      ;
  }

  findFormation(id): Formation {
    return this.formations.find(formation => formation.id === id);
    
  }

  isUpdating(id): boolean {
    return this.findFormation(id).isUpdating;
  }

  
  appendFormation(formation: Formation) {
    this.formations.push(formation);
    this.isLoading = false;
  }

  deleteFormation(id){
    let formation = this.findFormation(id);
    formation.isUpdating = true;
    this.formationService
      .deleteFormation(id)
      .subscribe(
        response => {
          // Ces ligne là font disparaitre de l'affichage mais ne réduisent pas le tableau,
          // ça met seulement à jour angular
          // formation.id = response.id;
          // formation.intitule = response.intitule;
          // formation.active = response.active;
          formation.isUpdating = false;
        },
        error => {
          this.errorMessage = <any>error;
          formation.isUpdating = false;
        }
      );
  }
  
}