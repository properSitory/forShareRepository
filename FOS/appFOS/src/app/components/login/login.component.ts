import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  data = {
    login: null,
    password: null
  };

  constructor(private authService: AuthService) { }

  ngOnInit(): void { }

  formLogin(): void {
    this.authService.login(this.data);
  }
}
