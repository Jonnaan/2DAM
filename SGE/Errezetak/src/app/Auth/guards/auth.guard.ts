import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

 return true;

};
