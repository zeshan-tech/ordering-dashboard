import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductSidebarComponent } from './add-product-sidebar.component';

describe('AddProductSidebarComponent', () => {
  let component: AddProductSidebarComponent;
  let fixture: ComponentFixture<AddProductSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddProductSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddProductSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
