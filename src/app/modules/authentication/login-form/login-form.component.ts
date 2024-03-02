import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  logoUrl: SafeResourceUrl;
  loginCredentials: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _authenticationService: AuthenticationService,
    private _router: Router,
    private _sanitizer: DomSanitizer,
    private _snackBar: MatSnackBar
  ) {
    this.loginCredentials = this._formBuilder.nonNullable.group({
      email: ['demo@user.com', [Validators.required, Validators.email]],
      password: ['password', Validators.required],
    });

    this.logoUrl = this._sanitizer.bypassSecurityTrustResourceUrl(
      '../../../../assets/company-logo.svg'
    );

    this._authenticationService.getCurrentUser().subscribe((user) => {
      if (user) {
        this._router.navigateByUrl('/home');
      }
    });
  }

  async login(event: Event) {
    event.preventDefault();

    await this._authenticationService.signIn(
      this.loginCredentials.getRawValue()
    );
  }

  async continueWithFacebook() {
    await this._authenticationService.facebookAuth();
  }

  async continueWithGoogle() {
    await this._authenticationService.googleAuth();
  }

  async continueWithApple() {
    await this._authenticationService.googleAuth();
  }

  ngOnInit() {}
}
