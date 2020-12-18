import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  API_URL = 'http://localhost:3040';

  constructor() { }
}
