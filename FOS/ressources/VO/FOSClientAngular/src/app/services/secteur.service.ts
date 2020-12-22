import { Injectable } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Secteur {
    id: Number;
    intitule: String;
    active: boolean;
    idannee:Number;
    formations:Number;
    specialites:Number;
    isUpdating: boolean;
}

const API_URL: string = 'http://localhost:8000';

@Injectable({
  providedIn: 'root'
})

export class SecteurService {

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

    getSecteurs(): Observable<Secteur[]> {
        return this.http.get<Secteur[]>(API_URL + '/secteurs');
    }

    increaseCount(id): Observable<Secteur> {
        return this.http.get<Secteur>(API_URL + '/secteurs/' + id + '/count');
    }

    addSecteur(secteur): Observable<Secteur> {
        return this.http.post<Secteur>(API_URL + '/secteurs', secteur);
    }
    
    deleteSecteur(id): Observable<Secteur> {
        return this.http.get<Secteur>(API_URL + '/secteurs/delete/'+ id);
    }
}