import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../modules/authentication/authentication.service';
import { Observable, map } from 'rxjs';
import { User } from '@supabase/supabase-js';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  currentUser$: Observable<User | null>;

  constructor(private _authenticationService: AuthenticationService) {
    this.currentUser$ = this._authenticationService.getCurrentUser();
  }

  async logout() {
    await this._authenticationService.signOut();
  }
}
