import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { UpdatePasswordComponent } from './security/update-password/update-password.component';
import { CommunicationPreferencesComponent } from './communication-preferences/communication-preferences.component';
import { SecurityComponent } from './security/security.component';
import { PersonalComponent } from './personal/personal.component';
import { ProfileSettingsComponent } from './profile-settings.component';
import { ProfileSettingsRoutingModule } from './profile-settings-routing.module';

@NgModule({
  declarations: [
    UpdatePasswordComponent,
    CommunicationPreferencesComponent,
    SecurityComponent,
    PersonalComponent,
    ProfileSettingsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatTabsModule,
    ProfileSettingsRoutingModule
  ],
})
export class ProfileSettingsModule {}
