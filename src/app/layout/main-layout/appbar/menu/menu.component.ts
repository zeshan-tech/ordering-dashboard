import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../../modules/authentication/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  constructor(
    private _authenticationService: AuthenticationService,
    private _router: Router
  ) {}

  async logout() {
    await this._authenticationService.signOut();
    this._router.navigateByUrl('/auth/login');
  }
}
