import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseClient, User, createClient } from '@supabase/supabase-js';
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
      console.log(sess?.user);

      if (
        (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') &&
        sess?.user
      ) {
        this.currentUser.next(sess?.user);
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
    return this.supabase.auth.signUp(credentials);
  }

  async signIn(credentials: { email: string; password: string }) {
    return this.supabase.auth.signInWithPassword(credentials);
  }

  async googleAuth() {
    return this.supabase.auth.signInWithOAuth({
      provider: 'google',
    });
  }

  async appleAuth() {
    return this.supabase.auth.signInWithOAuth({
      provider: 'apple',
    });
  }

  async facebookAuth() {
    console.log('working');

    return this.supabase.auth.signInWithOAuth({
      provider: 'facebook',
    });
  }

  async sendPasswordReset(email: string) {
    const result = await this.supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `http://localhost:4200/settings/personal/update-password`,
    });

    if (result.data) {
      this._router.navigate(['/auth/mail-sent']);
    }

    if (result.error) {
      this.openSnackBar(result.error.message, 'Close');
    }
  }

  async signOut() {
    await this.supabase.auth.signOut();
    this._router.navigateByUrl('/', { replaceUrl: true });
  }

  async updatePassword(password: string) {
    const result = await this.supabase.auth.updateUser({ password });

    if (result.data) {
      this._router.navigateByUrl('/');
    }

    if (result.error) {
      this.openSnackBar(result.error.message, 'Close');
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
