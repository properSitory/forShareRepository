import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ConnexionService {
  /**
   * Un internaute est connecté
   */
  connecte : boolean = false;
  token : string;
  /**
   * Gérer l'état d'identification d'un tiers
   * Nous utilisons une classe spécifique pour éviter les conflits et boucles liés à l'utilisation de la classe HttpClient
   */
  constructor() {
    this.connecte = this.recupereConnexion();
  }

  /**
   * Récupérer la connexion si elle a été stockée
   */
  recupereConnexion():boolean{
    if(sessionStorage.getItem('connexion')){
      return JSON.parse(sessionStorage.getItem('connexion'));
    }
      return this.connecte;
  }
  /**
   * Stock l'enregistrement dans le local storage
   * @param tag Un booléen pour dire s'il s'agit d'une connexion ou une déconnexion
   */
  stockConnexion(tag: boolean) {
    this.connecte = tag;
    sessionStorage.setItem('connexion', JSON.stringify(tag));
  }
}
