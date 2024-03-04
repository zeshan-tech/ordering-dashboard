import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteSettingsComponent } from './site-settings.component';

const routes: Routes = [
  {
    path: '',
    component: SiteSettingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiteSettingsRoutingModule {}
