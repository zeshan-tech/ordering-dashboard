import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreCustomizationComponent } from './store-customization.component';

describe('StoreCustomizationComponent', () => {
  let component: StoreCustomizationComponent;
  let fixture: ComponentFixture<StoreCustomizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreCustomizationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoreCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
