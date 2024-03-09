import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategorySidebarComponent } from './add-category-sidebar.component';

describe('AddCategorySidebarComponent', () => {
  let component: AddCategorySidebarComponent;
  let fixture: ComponentFixture<AddCategorySidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCategorySidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCategorySidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
