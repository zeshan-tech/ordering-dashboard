import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  AuthError,
  SupabaseClient,
  User,
  createClient,
} from '@supabase/supabase-js';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private supabase: SupabaseClient;
  private currentUser: BehaviorSubject<User | null> =
    new BehaviorSubject<null | User>(null);

  constructor(private _router: Router, private _snackBar: MatSnackBar) {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );

    this.supabase.auth.onAuthStateChange((event, sess) => {
      if (
        (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') &&
        sess?.user
      ) {
        this.currentUser.next(sess.user);
      } else {
        this.currentUser.next(null);
      }
    });

    this.loadUser();
  }

  async loadUser() {
    if (this.currentUser.value) return;

    const user = await this.supabase.auth.getUser();

    if (user.data.user) {
      this.currentUser.next(user.data.user);
    } else {
      this.currentUser.next(null);
    }
  }

  getCurrentUser(): Observable<User | null> {
    return this.currentUser.asObservable();
  }

  async signUp(credentials: { email: string; password: string }) {
    try {
      const result = await this.supabase.auth.signUp(credentials);

      if (result.error) {
        throw result.error;
      }

      this._router.navigate(['/auth/mail-sent']);
    } catch (error) {
      this.openSnackBar((error as AuthError).message, 'Close');
    }
  }

  async signIn(credentials: { email: string; password: string }) {
    try {
      const result = await this.supabase.auth.signInWithPassword(credentials);

      if (result.error) {
        throw result.error;
      }

      this._router.navigate(['/home']);
    } catch (error) {
      this.openSnackBar((error as AuthError).message, 'Close');
    }
  }

  async googleAuth() {
    try {
      const result = await this.supabase.auth.signInWithOAuth({
        provider: 'google',
      });

      if (result.error) {
        throw result.error;
      }

      // this._router.navigate(['/home']);
    } catch (error) {
      this.openSnackBar((error as AuthError).message, 'Close');
    }
  }

  async appleAuth() {
    try {
      const result = await this.supabase.auth.signInWithOAuth({
        provider: 'apple',
      });

      if (result.error) {
        throw result.error;
      }

      // this._router.navigate(['/home']);
    } catch (error) {
      this.openSnackBar((error as AuthError).message, 'Close');
    }
  }

  async facebookAuth() {
    try {
      console.log('working');

      const result = await this.supabase.auth.signInWithOAuth({
        provider: 'facebook',
      });

      if (result.error) {
        throw result.error;
      }

      // this._router.navigate(['/home']);
    } catch (error) {
      this.openSnackBar((error as AuthError).message, 'Close');
    }
  }

  async sendPasswordReset(email: string) {
    try {
      const result = await this.supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/settings/personal/update-password`,
      });

      if (result.error) {
        throw result.error;
      }

      this._router.navigate(['/auth/mail-sent']);
    } catch (error) {
      this.openSnackBar((error as AuthError).message, 'Close');
    }
  }

  async signOut() {
    try {
      const result = await this.supabase.auth.signOut();

      if (result.error) {
        throw result.error;
      }

      this._router.navigateByUrl('/', { replaceUrl: true });
    } catch (error) {
      this.openSnackBar((error as AuthError).message, 'Close');
    }
  }

  async updatePassword(password: string) {
    try {
      const result = await this.supabase.auth.updateUser({ password });

      if (result.error) {
        throw result.error;
      }

      this._router.navigateByUrl('/');
    } catch (error) {
      this.openSnackBar((error as AuthError).message, 'Close');
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
