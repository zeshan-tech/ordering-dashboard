import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterFormComponent } from './register-form/register-form.component';
import { MoreIconsComponent } from '../../shared/more-icons/more-icons.component';
import { ResetPasswordFormComponent } from './reset-password-form/reset-password-form.component';
import { MailSentComponent } from './mail-sent/mail-sent.component';

@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    MoreIconsComponent,
    ResetPasswordFormComponent,
    MailSentComponent,
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
})
export class AuthenticationModule {}
