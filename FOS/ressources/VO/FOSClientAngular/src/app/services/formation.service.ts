import { Injectable } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Formation {
    id: Number;
    intitule: String;
    active: boolean;
    groupes:string;
    idsecteur:Number;
    isUpdating: boolean;
}

const API_URL: string = 'http://localhost:8000';

@Injectable({
  providedIn: 'root'
})

export class FormationService {

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

    getFormations(): Observable<Formation[]> {
        return this.http.get<Formation[]>(API_URL + '/formations');
    }

    increaseCount(id): Observable<Formation> {
        return this.http.get<Formation>(API_URL + '/formations/' + id + '/count');
    }

    addFormation(formation): Observable<Formation> {
        return this.http.post<Formation>(API_URL + '/formations', formation);
    }
    
    deleteFormation(id): Observable<Formation> {
        return this.http.get<Formation>(API_URL + '/formations/delete/'+ id);
    }
}