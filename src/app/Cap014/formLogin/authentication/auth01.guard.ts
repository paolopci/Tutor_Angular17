import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService01Service } from './auth-service01.service';

export const auth01Guard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService01Service);
  const router = inject(Router);
  if (authService.isLoggedInUser()) {
    return true;
  } else {
    alert('Login Required');
    router.navigate(['/formLogin'])
  }

  return true;
};
