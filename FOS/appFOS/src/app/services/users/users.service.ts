import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConnexionService } from '../connexion/connexion.service';

export class Users {
  id: number;
  firstname: string;
  lastname: string;
  login: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private connexionService: ConnexionService ) { }

  getUsers() {
    return this.http.get<Users>(this.connexionService.API_URL + '/users');
  }

  // increaseCount(id): Observable<Users> {
  //   return this.http.get<Users>(API_URL + '/users/' + id + '/count');
  // }

  // addUser(formation): Observable<Users> {
  //   return this.http.post<Users>(API_URL + '/users', formation);
  // }

  // deleteUser(id): Observable<Users> {
  //   return this.http.get<Users>(API_URL + '/users/delete/' + id);
  // }
}
