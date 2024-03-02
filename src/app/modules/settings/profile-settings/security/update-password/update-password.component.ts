import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AuthenticationService } from '../../../../authentication/authentication.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss'],
})
export class UpdatePasswordComponent {
  logoUrl: SafeResourceUrl;
  updatePasswordCredentials: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _authenticationService: AuthenticationService,
    private _sanitizer: DomSanitizer
  ) {
    this.updatePasswordCredentials = this._formBuilder.nonNullable.group(
      {
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required],
      },
      { validators: this.passwordMatchValidator }
    );

    this.logoUrl = this._sanitizer.bypassSecurityTrustResourceUrl(
      '../../../../assets/company-logo.svg'
    );
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password?.value !== confirmPassword?.value) {
      return { mismatch: true };
    } else {
      return null;
    }
  }

  async updatePassword(event: Event) {
    event.preventDefault();

    const { password } = this.updatePasswordCredentials.getRawValue();

    await this._authenticationService.updatePassword(password);
  }
}
