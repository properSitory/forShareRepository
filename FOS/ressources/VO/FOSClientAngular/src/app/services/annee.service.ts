import { Injectable } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Annee {
  id: Number;
  idAnnee: Number;
  date_debut: Date;
  date_fin: Date;
  groupe_link: Number | string;
  isUpdating: boolean;
}

const API_URL: string = 'http://localhost:8000';

@Injectable({
  providedIn: 'root'
})

export class AnneeService {

    private accessToken;
    private headers;

    constructor(private oktaAuth: OktaAuthService, private http: HttpClient) {
        this.init();
    }

    async init() {
        this.accessToken = await this.oktaAuth.getAccessToken();
        this.headers = new HttpHeaders({
            Authorization: 'Bearer ' + this.accessToken
        });
    }

    getAnnees(): Observable<Annee[]> {
        return this.http.get<Annee[]>(API_URL + '/annees');
    }

    increaseCount(id): Observable<Annee> {
        return this.http.get<Annee>(API_URL + '/annees/' + id + '/count');
    }

    addAnnee(annee): Observable<Annee> {
        return this.http.post<Annee>(API_URL + '/annees', annee);
    }
    
    deleteAnnee(id): Observable<Annee> {
        return this.http.get<Annee>(API_URL + '/annees/delete/'+ id);
    }
}