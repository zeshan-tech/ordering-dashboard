import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../modules/authentication/authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard {
  constructor(
    private _authenticationService: AuthenticationService,
    private _router: Router
  ) {}

  canActivate() {
    if (true === true) {
      this._router.navigate(['/auth/login']); //
      return false;
    }

    return true;
  }

  /* canActivate(route, state): boolean {
    // Use authService methods to check authentication status
    return this.authService.isLoggedIn(); // Replace with your desired logic
  } */
}
