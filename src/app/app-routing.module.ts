import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
    ],
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [],
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'delivery',
        loadChildren: () =>
          import('./modules/delivery/delivery.module').then(
            (m) => m.DeliveryModule
          ),
      },
      {
        path: 'messages',
        loadChildren: () =>
          import('./modules/messages/messages.module').then(
            (m) => m.MessagesModule
          ),
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('./modules/orders/orders.module').then((m) => m.OrdersModule),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./modules/settings/settings.module').then(
            (m) => m.SettingsModule
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'auth',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
