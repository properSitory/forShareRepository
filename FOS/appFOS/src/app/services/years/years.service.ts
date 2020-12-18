import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConnexionService } from '../connexion/connexion.service';

export class Years {
  id: number;
  dateStart: string;
  dateEnd: string;
}

@Injectable({
  providedIn: 'root'
})
export class YearsService {

  constructor(private http: HttpClient, private connexionService: ConnexionService ) { }

  getYears() {
    return this.http.get<Years>(this.connexionService.API_URL + '/years');
  }

  // increaseCount(id): Observable<Years> {
  //   return this.http.get<Years>(API_URL + '/years/' + id + '/count');
  // }

  // addYear(formation): Observable<Years> {
  //   return this.http.post<Years>(API_URL + '/years', formation);
  // }

  // deleteYear(id): Observable<Years> {
  //   return this.http.get<Years>(API_URL + '/years/delete/' + id);
  // }
}
