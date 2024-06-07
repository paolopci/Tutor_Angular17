import { CanMatchFn } from '@angular/router';

export const admin03Guard: CanMatchFn = (route, segments) => {

  const role = localStorage.getItem('role');


  console.log(role);
  if (role === 'ADMIN') {
    return true;
  }
  return false;
};
