import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ResetPasswordFormComponent } from './reset-password-form/reset-password-form.component';
import { MailSentComponent } from './mail-sent/mail-sent.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterFormComponent,
  },
  {
    path: 'login',
    component: LoginFormComponent,
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
  },
  {
    path: 'mail-sent',
    component: MailSentComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
