import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConnexionService } from '../connexion/connexion.service';

export class Learners {
  id: number;
  firstname: string;
  lastname: string;
  genders_id: number;
  birthdate: string;
  adress: string;
  zipcode: number;
  email: string;
  telephone: string;
}

@Injectable({
  providedIn: 'root'
})
export class LearnersService {

  constructor(private http: HttpClient, private connexionService: ConnexionService ) { }

  getLearners() {
    return this.http.get<Learners>(this.connexionService.API_URL + '/learners');
  }

  // increaseCount(id): Observable<Learners> {
  //   return this.http.get<Learners>(API_URL + '/learners/' + id + '/count');
  // }

  // addLearner(formation): Observable<Learners> {
  //   return this.http.post<Learners>(API_URL + '/learners', formation);
  // }

  // deleteLearner(id): Observable<Learners> {
  //   return this.http.get<Learners>(API_URL + '/learners/delete/' + id);
  // }
}
