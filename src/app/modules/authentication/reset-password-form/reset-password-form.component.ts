import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AuthenticationService } from '../authentication.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrl: './reset-password-form.component.scss',
})
export class ResetPasswordFormComponent {
  logoUrl: SafeResourceUrl;
  resetPasswordCredentials: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _authenticationService: AuthenticationService,
    private _sanitizer: DomSanitizer,
    public _location: Location
  ) {
    this.resetPasswordCredentials = this._formBuilder.nonNullable.group({
      email: ['demo@user.com', [Validators.required, Validators.email]],
    });

    this.logoUrl = this._sanitizer.bypassSecurityTrustResourceUrl(
      '../../../../assets/company-logo.svg'
    );
  }

  async sendPasswordReset(event: Event) {
    event.preventDefault();
    const { email } = this.resetPasswordCredentials.getRawValue();

    await this._authenticationService.sendPasswordReset(email);
  }
}
