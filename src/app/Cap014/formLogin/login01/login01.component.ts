import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService01Service } from '../authentication/auth-service01.service';

@Component({
  selector: 'app-login01',
  templateUrl: './login01.component.html',
  styleUrl: './login01.component.css'
})
export class Login01Component {
  email: string = '';
  password: string = '';

  constructor(private router: Router,private auth: AuthService01Service) { }

  islogin(): void {
    const checkLogin = this.auth.login(this.email, this.password);

    if (checkLogin) {
      this.router.navigate(['/formAdmin']);
    }else {
      alert('Please enter email and password');
    }
  }

}
