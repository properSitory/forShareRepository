import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { BonjourService } from '../../services/bonjour/bonjour.service';

@Component({
  selector: 'app-navbar',
  providers: [AuthService],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  navbarDisplay: boolean;
  subscriptionBonjour: Subscription;
  authenticated: boolean;

  constructor(private authService: AuthService, public bonjourService: BonjourService) {
  }

  ngOnInit(): void {
    this.subscriptionBonjour = this.bonjourService.getBonjour().subscribe(
      data => { console.log('Data de Bonjour :', data); this.navbarDisplay = data; },
      err => console.group('Erreur data de bonjour', err)
    );
    this.authService.isAuthenticated()
  }
  ngOnDestroy(): void {
    this.subscriptionBonjour.unsubscribe();
  }

  checking(): void {
    console.log('navbar navbarDisplay');
    console.log(this.navbarDisplay);
  }

  navbarLogout(): void {
    this.authService.logout();
    console.log('navbarLogout');
  }

  showStorage(): void {
    console.log(localStorage.getItem('tokenFOS_Expire'));
    console.log(localStorage.getItem('tokenFOS_Token'));
  }
}
