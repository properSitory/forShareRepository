import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConnexionService } from '../connexion/connexion.service';

export class Sectors {
  id: number;
  name: string;
  active: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SectorsService {

  constructor(private http: HttpClient, private connexionService: ConnexionService ) { }

  getSectors() {
    return this.http.get<Sectors>(this.connexionService.API_URL + '/sectors');
  }

  // increaseCount(id): Observable<Sectors> {
  //   return this.http.get<Sectors>(API_URL + '/formations/' + id + '/count');
  // }

  // addSector(formation): Observable<Sectors> {
  //   return this.http.post<Sectors>(API_URL + '/formations', formation);
  // }

  // deleteSector(id): Observable<Sectors> {
  //   return this.http.get<Sectors>(API_URL + '/formations/delete/' + id);
  // }
}
