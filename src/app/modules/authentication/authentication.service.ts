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
import { nanoid } from 'nanoid';
import { getFileExtension } from '../../utils/getFileExtension';

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

  async signUp(credentials: ISignUp) {
    try {
      const result = await this.supabase.auth.signUp({
        email: credentials.email,
        password: credentials.password,
        options: {
          data: {
            full_name: credentials.userName,
          },
          emailRedirectTo: `${window.location.origin}/home`,
        },
      });

      if (result.error) {
        throw result.error;
      }

      this._router.navigate(['auth/mail-sent']);
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

      this._router.navigate(['home']);
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
    } catch (error) {
      this.openSnackBar((error as AuthError).message, 'Close');
    }
  }

  async facebookAuth() {
    try {
      const result = await this.supabase.auth.signInWithOAuth({
        provider: 'facebook',
      });

      if (result.error) {
        throw result.error;
      }
    } catch (error) {
      this.openSnackBar((error as AuthError).message, 'Close');
    }
  }

  async sendPasswordReset(email: string) {
    try {
      const result = await this.supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/home`,
      });

      if (result.error) {
        throw result.error;
      }

      this._router.navigate(['auth/mail-sent']);
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

      this._router.navigateByUrl('', { replaceUrl: true });
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

      this._router.navigateByUrl('');
    } catch (error) {
      this.openSnackBar((error as AuthError).message, 'Close');
    }
  }

  async updateEmail(email: string) {
    try {
      const result = await this.supabase.auth.updateUser(
        { email },
        { emailRedirectTo: `${window.location.origin}/home` }
      );

      if (result.error) {
        throw result.error;
      }
    } catch (error) {
      this.openSnackBar((error as AuthError).message, 'Close');
    }
  }

  async updatePhone(phone: string) {
    try {
      const result = await this.supabase.auth.updateUser({ phone });

      if (result.error) {
        throw result.error;
      }
    } catch (error) {
      this.openSnackBar((error as AuthError).message, 'Close');
    }
  }

  async updateUserData(updatedUser: IUpdateUserData) {
    try {
      const data: any = {};
      console.log(updatedUser);

      if (updatedUser.userName) data['full_name'] = updatedUser.userName;
      if (updatedUser.picture) data['picture'] = updatedUser.picture;

      const result = await this.supabase.auth.updateUser({ data });

      if (result.error) {
        throw result.error;
      }
    } catch (error) {
      this.openSnackBar((error as AuthError).message, 'Close');
    }
  }

  async uploadPicture(file: File): Promise<string | void> {
    try {
      const { data, error } = await this.supabase.storage
        .from('profile-pictures')
        .upload(`${nanoid()}.${getFileExtension(file.name)}`, file);

      if (error) throw error;

      console.log(data.path);

      const {
        data: { publicUrl },
      } = this.supabase.storage
        .from('profile-pictures')
        .getPublicUrl(data.path);

      return publicUrl;
    } catch (error) {
      this.openSnackBar((error as Error).message, 'Close');
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}

interface IUpdateUserData {
  userName: string;
  picture: string;
}

interface ISignUp {
  email: string;
  userName: string;
  password: string;
}
