import { Component, Input } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-add-category-sidebar',
  templateUrl: './add-category-sidebar.component.html',
  styleUrl: './add-category-sidebar.component.scss',
})
export class AddCategorySidebarComponent {
  constructor(public _layoutService: LayoutService) {}
}
