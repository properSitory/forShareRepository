import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter, Output  } from '@angular/core';
import { ConnexionService } from '../services/connexion/connexion.service';

/**
 * Composant de connexion
 */
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})

export class ConnexionComponent implements OnInit {
  /**
   * Objet connecté au HTML pour récupérer les valeurs saisies dans les champs du formulaire d'authentification
   */
  donneesID = {
    login: 'ddd',
    mdp: 'ddd'
  };
  /**
   * Non implémenté, permettra de gérer les erreurs
   */
  authErreur: boolean;
  model: any;
  /**
   * Page de connexion
   * @param router On récupère la route
   * @param authService Service qui s'occupe de vérifier la validité de l'authentification
   * @param connexion Stockage du statut de l'authentification avec gestion du sessionStorage
   */
  constructor(private router: Router, public connexion: ConnexionService) {
  }

  ngOnInit() {
  }

  login() {
    console.log('Tentative de connexion');
    // Vérifier que login/mdp sont correctes, par exemple par une requête à un service REST
    localStorage.setItem('user', JSON.stringify({ login: this.model.username }));
    this.router.navigate(['/connexion']);
  }
  getLogin() {
    return JSON.parse(localStorage.getItem('user')).login;
  }

  logout() {
    console.log('Tentative de déconnexion');

    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

}
