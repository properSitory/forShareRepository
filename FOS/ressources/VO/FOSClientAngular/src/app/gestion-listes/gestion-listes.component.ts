import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Output } from '@angular/core';
import { Secteur } from "../services/Secteur";
import { SecteurService } from '../services/secteur.service';
import { Formation } from "../services/Formation";
import { FormationService } from '../services/formation.service';
import { Groupe } from "../services/Groupe";
import { GroupeService } from '../services/groupe.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-gestion-listes',
  templateUrl: './gestion-listes.component.html',
  styleUrls: ['./gestion-listes.component.scss']
})

export class GestionListesComponent implements OnInit {

  secteurs: Secteur[];
  errorMessage: string;
  errors: string = '';
  isLoading: boolean = true;
  idSecteur: number | string;
  intituleSecteur: string;

  formations: Formation[];
  idFormation: number | string;
  intituleFormation: string;

  groupes: Groupe[];
  idGroupe: number | string;
  intituleGroupe: string;

  ngForOf = '';

  constructor(private http: HttpClient, private secteurService: SecteurService, private formationService: FormationService, private groupeService: GroupeService) { }

  @Output()
  private _secteurAdded: EventEmitter<Secteur> = new EventEmitter<Secteur>();
  public get secteurAdded(): EventEmitter<Secteur> {
    return this._secteurAdded;
  }
  public set secteurAdded(value: EventEmitter<Secteur>) {
    this._secteurAdded = value;
  }

  private _formationAdded: EventEmitter<Formation> = new EventEmitter<Formation>();
  public get formationAdded(): EventEmitter<Formation> {
    return this._formationAdded;
  }
  public set formationAdded(value: EventEmitter<Formation>) {
    this._formationAdded = value;
  }

  private _groupeAdded: EventEmitter<Groupe> = new EventEmitter<Groupe>();
  public get groupeAdded(): EventEmitter<Groupe> {
    return this._groupeAdded;
  }
  public set groupeAdded(value: EventEmitter<Groupe>) {
    this._groupeAdded = value;
  }


  ngOnInit() {
    this.getSecteurs();
    this.getFormations();
    this.getGroupes();
  }


  trackElement(index: number, element: any) {
    return element ? element.guid : null
  }

  // SECTEURS
  getSecteurs() {
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

  isUpdatingSecteur(id): boolean {
    return this.findSecteur(id).isUpdating;
  }

  addSecteur(intitule) {
    this.isLoading = true;
    this.secteurService
      .addSecteur({
        intitule: intitule
      })
      .subscribe(
        secteur => {
          this.isLoading = false;
          secteur.isUpdating = false;
          this.secteurAdded.emit(secteur);
        },
        error => {
          this.errors = error.json().errors;
          this.isLoading = false;
        }
      );
  }

  appendSecteur(secteur: Secteur) {
    this.secteurs.push(secteur);
    this.isLoading = false;
  }

  deleteSecteur(id) {
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
          this.isLoading = false;
          secteur.isUpdating = false;
          this.secteurAdded.emit(secteur);
        },
        error => {
          this.errorMessage = <any>error;
          secteur.isUpdating = false;
        }
      );
  }


  // FORMATIONS
  getFormations() {
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

  isUpdatingFormation(id): boolean {
    return this.findFormation(id).isUpdating;
  }

  appendFormation(formation: Formation) {
    this.formations.push(formation);
    this.isLoading = false;
  }

  deleteFormation(id) {
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

  // GROUPES
  getGroupes() {
    this.groupeService
      .getGroupes()
      .subscribe(
        groupes => {
          this.groupes = groupes;
          this.isLoading = false;
        },
        error => this.errorMessage = <any>error);
    ;
  }

  findGroupe(id): Groupe {
    return this.groupes.find(groupe => groupe.id === id);

  }

  isUpdatingGroupe(id): boolean {
    return this.findGroupe(id).isUpdating;
  }

  addGroupe(intitule) {
    this.isLoading = true;
    this.groupeService
      .addGroupe({
        intitule: intitule
      })
      .subscribe(
        groupe => {
          this.isLoading = false;
          groupe.isUpdating = false;
          this.groupeAdded.emit(groupe);
        },
        error => {
          this.errors = error.json().errors;
          this.isLoading = false;
        }
      );
  }

  appendGroupe(groupe: Groupe) {
    this.groupes.push(groupe);
    this.isLoading = false;
  }

  deleteGroupe(id) {
    let groupe = this.findGroupe(id);
    groupe.isUpdating = true;
    this.groupeService
      .deleteGroupe(id)
      .subscribe(
        response => {
          // Ces ligne là font disparaitre de l'affichage mais ne réduisent pas le tableau,
          // ça met seulement à jour angular
          // groupe.id = response.id;
          // groupe.intitule = response.intitule;
          // groupe.active = response.active;
          this.isLoading = false;
          groupe.isUpdating = false;
          this.groupeAdded.emit(groupe);
        },
        error => {
          this.errorMessage = <any>error;
          groupe.isUpdating = false;
        }
      );
  }

}
