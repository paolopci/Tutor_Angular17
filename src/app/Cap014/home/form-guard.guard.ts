import { CanDeactivateFn } from '@angular/router';
import { LoginFormComponent } from './login-form.component';



export const formGuard: CanDeactivateFn<LoginFormComponent> = (component, currentRoute, currentState, nextState) => {

  if (component.email?.dirty && component.password?.dirty) {
    return confirm('Your changes are unsaved! Are you sure you want yo leave?') ? true : false;
  }
  console.log(currentRoute);
  console.log(currentState);
  console.log(nextState);
  return true;
};
