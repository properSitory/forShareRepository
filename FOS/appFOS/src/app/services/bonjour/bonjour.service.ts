import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BonjourService {

  private subject = new Subject<boolean>();

  constructor() { }

  setBonjour(): void {
    this.subject.next(true);
  }

  setGoodbye(): void {
    this.subject.next(false);
  }

  getBonjour(): Subject<boolean> {
    return this.subject;
  }
}
