import { CanMatchFn } from '@angular/router';

export const user03Guard: CanMatchFn = (route, segments) => {

  const role = localStorage.getItem('role');


  console.log(role);
  if (role === 'USER') {
    return true;
  }
  return false;
};
