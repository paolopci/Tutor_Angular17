import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { ButtonClickService } from '../services/button-click.service';

export const auth2Guard: CanActivateChildFn = (childRoute, state) => {
  // here injecting dependecies
  const btnService = inject(ButtonClickService);
  const router = inject(Router);

  const btnClick: boolean = btnService.isButtonClicked();

  if (btnClick) {
    return true;
  } else {
    router.navigate(['/parent']);
    return false;
  }
};
