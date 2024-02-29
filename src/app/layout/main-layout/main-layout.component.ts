import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  template: `
    <app-appbar></app-appbar>
    <router-outlet></router-outlet>
  `,
})
export class MainLayoutComponent {}
