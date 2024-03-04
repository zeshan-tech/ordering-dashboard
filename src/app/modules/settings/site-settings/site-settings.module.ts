import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteSettingsRoutingModule } from './site-settings-routing.module';
import { MatCardModule } from '@angular/material/card';
import { SiteSettingsComponent } from './site-settings.component';
import { MatIconModule } from '@angular/material/icon';
import { LoginAndSignUpOptionsComponent } from './login-and-sign-up-options/login-and-sign-up-options.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { GoogleSigninComponent } from './google-signin/google-signin.component';
import { FacebookSigninComponent } from './facebook-signin/facebook-signin.component';
import { StoreCustomizationComponent } from './store-customization/store-customization.component';

@NgModule({
  declarations: [SiteSettingsComponent, LoginAndSignUpOptionsComponent, GoogleSigninComponent, FacebookSigninComponent, StoreCustomizationComponent],
  imports: [
    CommonModule,
    SiteSettingsRoutingModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule
  ],
})
export class SiteSettingsModule {}
