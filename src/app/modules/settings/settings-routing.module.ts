import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'profile',
        loadChildren: () =>
          import('./profile-settings/profile-settings.module').then(
            (m) => m.ProfileSettingsModule
          ),
      },
      {
        path: 'site',
        loadChildren: () =>
          import('./site-settings/site-settings.module').then(
            (m) => m.SiteSettingsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
