import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConnexionService } from '../connexion/connexion.service';

export class Trainings {
  id: number;
  name: string;
  active: boolean;
  sectors_id: number;
  years_id: number;
}

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {

  constructor(private http: HttpClient, private connexionService: ConnexionService ) { }

  getTrainings() {
    return this.http.get<Trainings>(this.connexionService.API_URL + '/trainings');
  }

  // increaseCount(id): Observable<Trainings> {
  //   return this.http.get<Trainings>(API_URL + '/trainings/' + id + '/count');
  // }

  // addTraining(formation): Observable<Trainings> {
  //   return this.http.post<Trainings>(API_URL + '/trainings', formation);
  // }

  // deleteTraining(id): Observable<Trainings> {
  //   return this.http.get<Trainings>(API_URL + '/trainings/delete/' + id);
  // }
}
