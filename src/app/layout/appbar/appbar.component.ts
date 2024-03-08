import { Component } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrl: './appbar.component.scss',
})
export class AppbarComponent {
  constructor(public _layoutService: LayoutService) {}
}
