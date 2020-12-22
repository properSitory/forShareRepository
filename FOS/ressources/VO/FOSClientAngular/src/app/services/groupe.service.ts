import { Injectable } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Groupe {
    id: Number;
    intitule: String;
    active: boolean;
    groupes:string;
    specialites:Number;
    isUpdating: boolean;
}

const API_URL: string = 'http://localhost:8000';

@Injectable({
  providedIn: 'root'
})

export class GroupeService {

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

    getGroupes(): Observable<Groupe[]> {
        return this.http.get<Groupe[]>(API_URL + '/groupes');
    }

    increaseCount(id): Observable<Groupe> {
        return this.http.get<Groupe>(API_URL + '/groupes/' + id + '/count');
    }

    addGroupe(groupe): Observable<Groupe> {
        return this.http.post<Groupe>(API_URL + '/groupes', groupe);
    }
    
    deleteGroupe(id): Observable<Groupe> {
        return this.http.get<Groupe>(API_URL + '/groupes/delete/'+ id);
    }
}