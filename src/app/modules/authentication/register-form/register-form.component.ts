import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss',
})
export class RegisterFormComponent {
  logoUrl: SafeResourceUrl;
  registerCredentials: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _authenticationService: AuthenticationService,
    private _sanitizer: DomSanitizer,
    private _snackBar: MatSnackBar
  ) {
    this.registerCredentials = this._formBuilder.nonNullable.group({
      email: ['demo@user.com', [Validators.required, Validators.email]],
      password: ['password', Validators.required],
      userName: ['John', Validators.required],
    });

    this.logoUrl = this._sanitizer.bypassSecurityTrustResourceUrl(
      '../../../../assets/company-logo.svg'
    );
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  async register(event: Event) {
    event.preventDefault();

    const result = await this._authenticationService.signUp(
      this.registerCredentials.getRawValue()
    );

    if (result.error) {
      this.openSnackBar(result.error.message, 'Close');
    }
  }

  async continueWithFacebook() {
    const result = await this._authenticationService.facebookAuth();
    if (result.error) {
      this.openSnackBar(result.error.message, 'Close');
    }
  }

  async continueWithGoogle() {
    const result = await this._authenticationService.googleAuth();
    if (result.error) {
      this.openSnackBar(result.error.message, 'Close');
    }
  }

  async continueWithApple() {
    const result = await this._authenticationService.googleAuth();
    if (result.error) {
      this.openSnackBar(result.error.message, 'Close');
    }
  }
}
