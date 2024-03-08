import { ChangeDetectorRef, Component, ViewChild, inject } from '@angular/core';
import { LayoutService } from '../layout.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(public _layoutService: LayoutService) {}

  @ViewChild('sidenav') sidenav!: MatSidenav;

  private cdr = inject(ChangeDetectorRef);

  toggle() {
    this.sidenav.toggle();
    this.cdr.detectChanges();
  }
}
