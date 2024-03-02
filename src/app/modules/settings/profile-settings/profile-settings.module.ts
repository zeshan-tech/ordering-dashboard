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
import { UserCardComponent } from './personal/user-card/user-card.component';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import { UserEditAccordionComponent } from './personal/user-edit-accordion/user-edit-accordion.component';

@NgModule({
  declarations: [
    UpdatePasswordComponent,
    CommunicationPreferencesComponent,
    SecurityComponent,
    PersonalComponent,
    ProfileSettingsComponent,
    UserCardComponent,
    UserEditAccordionComponent
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
    ProfileSettingsRoutingModule,
    MatExpansionModule,
    MatIconModule,
  ],
})
export class ProfileSettingsModule {}
