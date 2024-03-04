import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportRoutingModule } from './support-routing.module';
import { SupportComponent } from './support.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [SupportComponent],
  imports: [CommonModule, SupportRoutingModule, MatButtonModule],
})
export class SupportModule {}
