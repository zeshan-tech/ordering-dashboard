import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreIconsComponent } from './more-icons.component';

describe('MoreIconsComponent', () => {
  let component: MoreIconsComponent;
  let fixture: ComponentFixture<MoreIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoreIconsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoreIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
