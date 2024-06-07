import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService01Service {
  private isLoggedIn: boolean = false;

  login(email: string, password: string): boolean {
    if (email !== '' && password !== '') {
      this.isLoggedIn = true;
      return true;
    } else return false;
  }

  isLoggedInUser(): boolean {
    return this.isLoggedIn;
  }

}
