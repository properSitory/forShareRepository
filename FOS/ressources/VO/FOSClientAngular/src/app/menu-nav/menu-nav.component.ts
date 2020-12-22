import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.scss']
})
export class MenuNavComponent implements OnInit {

  isAuthenticated: boolean;

    constructor(public oktaAuth: OktaAuthService) {
        this.oktaAuth.$authenticationState.subscribe(
            (isAuthenticated: boolean) => (this.isAuthenticated = isAuthenticated)
        );
    }

    async ngOnInit() {
        this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    }

    login() {
        this.oktaAuth.loginRedirect('/');
        this.oktaAuth.handleAuthentication();
    }

    logout() {
        this.oktaAuth.logout('/');
        this.oktaAuth.handleAuthentication();
    }

}
