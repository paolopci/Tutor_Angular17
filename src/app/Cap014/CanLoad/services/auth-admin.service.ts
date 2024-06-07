import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminService {

  private userRoles: string[] = ['user', 'admin']
  private loggedIn: boolean = false;

  isLoggedIn() {
    return this.loggedIn;
  }


  // Autorizzo l'accesso sono se loggato e l'utente è "admin"
  isAdmin(): boolean {
    return this.isLoggedIn() && this.userRoles.includes('admin');
  }
}
