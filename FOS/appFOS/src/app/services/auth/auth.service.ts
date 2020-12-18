import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BonjourService } from '../bonjour/bonjour.service';
import { ConnexionService } from '../connexion/connexion.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    ref = null;
    dateajd: Date;
    now = null;
    authenticated: boolean;

    constructor(private http: HttpClient, private router: Router, private bonjourService: BonjourService, private connexionService: ConnexionService ) { }

    public getToken(): string {
        return localStorage.getItem('tokenFOS_Token');
    }
    public getExpire(): string {
        return localStorage.getItem('tokenFOS_Expire');
    }

    login(data: object): void {
        // console.log('formLogin auth', data);
        this.http.post<any>(this.connexionService.API_URL + '/login', data).subscribe(
            (result) => {
                if (result.token !== null) {
                    // console.log("result.token :", result.token);
                    this.dateajd = new Date();
                    this.now = JSON.stringify(this.dateajd.getTime());
                    localStorage.setItem('tokenFOS_Expire', this.now);
                    localStorage.setItem('tokenFOS_Token', result.token);
                    this.bonjourService.setBonjour();
                    this.router.navigate(['/home'], { skipLocationChange: false });
                } else {
                    this.router.navigate(['/login'], { skipLocationChange: false });
                }
            },
            (error) => console.log('Error ', error)
        );
    }

    logout(): void {
        localStorage.removeItem('tokenFOS_Expire');
        localStorage.removeItem('tokenFOS_Token');
        this.bonjourService.setGoodbye();
        //  TODO   http.get('/logout'); // dire à api que token dead
        this.router.navigate(['/login'], { skipLocationChange: false });
    }

    public isAuthenticated(): void {
        const token = this.getToken();
        this.dateajd = new Date();
        this.now = this.dateajd.getTime();
        this.ref = this.getExpire();
        if (token) {
            if ((this.now - this.ref) < 900000) {
                this.now = JSON.stringify(this.now);
                localStorage.setItem('tokenFOS_Expire', this.now);
                this.bonjourService.setBonjour();
            } else {
                window.alert('Vous avez été déconnecté car vous êtes resté innactif pendant trop longtemps');
                this.logout();
            }
        } else {
            console.log('ou passe dans le else');
            this.logout();
        }
    }
}
