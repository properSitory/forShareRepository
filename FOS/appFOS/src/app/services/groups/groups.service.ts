import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConnexionService } from '../connexion/connexion.service';

export class Groups {
  id: number;
  name: string;
  active: boolean;
  trainings_id: number;
  dateStart: string;
  dateEnd: string;
}

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(private http: HttpClient, private connexionService: ConnexionService ) { }

  getGroups() {
    return this.http.get<Groups>(this.connexionService.API_URL + '/groups');
  }

  // increaseCount(id): Observable<Groups> {
  //   return this.http.get<Groups>(API_URL + '/groups/' + id + '/count');
  // }

  // addGroup(formation): Observable<Groups> {
  //   return this.http.post<Groups>(API_URL + '/groups', formation);
  // }

  // deleteGroup(id): Observable<Groups> {
  //   return this.http.get<Groups>(API_URL + '/groups/delete/' + id);
  // }
}
