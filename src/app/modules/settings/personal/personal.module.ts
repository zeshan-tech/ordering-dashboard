import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [LayoutComponent, UpdatePasswordComponent],
  imports: [
    CommonModule,
    PersonalRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule
  ],
})
export class PersonalModule {}
