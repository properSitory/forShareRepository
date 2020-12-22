import { Component } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'FollowerOfStudent';

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
    }

    logout() {
        this.oktaAuth.logout('/');
    }
}

