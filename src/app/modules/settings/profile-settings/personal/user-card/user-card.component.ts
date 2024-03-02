import { Component } from '@angular/core';
import { User } from '@supabase/supabase-js';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../../../authentication/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  currentUser$: Observable<User | null>;

  constructor(
    private _authenticationService: AuthenticationService,
    private _snackBar: MatSnackBar
  ) {
    this.currentUser$ = this._authenticationService.getCurrentUser();
  }

  async logout() {
    await this._authenticationService.signOut();
  }

  copyUserId() {
    this.currentUser$.subscribe((user) => {
      console.log(user);
      
      if (user) {
        navigator.clipboard.writeText(user.id);
        this._snackBar.open('User ID copied to clipboard', 'Close');
      }
    });
  }
}
