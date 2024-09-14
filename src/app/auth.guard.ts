import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {
  if (!localStorage.getItem('token')) {
    inject(Router).navigate(['/login']);
    return false;
  }
  let role = route.data['role'] as string;
  let userData = JSON.parse(localStorage.getItem('user')!);
  if (role != userData.role) {
    inject(Router).navigate(['']);
    return false;
  }
  return true;
};


