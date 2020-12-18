import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConnexionService } from '../connexion/connexion.service';

export class States {
  id: number;
  contracttype: string;
  dateStart: string;
  dateEnd: string;
  employer: string;
  jobname: string;
  trainingsFinish: string;
  comment: string;
  learners_id: number;
  groups_id: number;
}

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  constructor(private http: HttpClient, private connexionService: ConnexionService ) { }

  getStates() {
    return this.http.get<States>(this.connexionService.API_URL + '/states');
  }

  // increaseCount(id): Observable<States> {
  //   return this.http.get<States>(API_URL + '/states/' + id + '/count');
  // }

  // addState(formation): Observable<States> {
  //   return this.http.post<States>(API_URL + '/states', formation);
  // }

  // deleteState(id): Observable<States> {
  //   return this.http.get<States>(API_URL + '/states/delete/' + id);
  // }
}
