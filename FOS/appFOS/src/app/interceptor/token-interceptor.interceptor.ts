import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  ref = null;
  dateajd: Date;
  now = null;

  constructor(public auth: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.dateajd = new Date();
    this.now = this.dateajd.getTime();
    this.ref = parseInt(localStorage.getItem('tokenFOS_Expire'));
    if ((this.now - this.ref) < 60000) {
      localStorage.setItem('tokenFOS_Expire', this.now);
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + this.auth.getToken()
        }
      });
      return next.handle(request);
    } else {
      this.auth.logout();
      return next.handle(request);
    }
  }
}
