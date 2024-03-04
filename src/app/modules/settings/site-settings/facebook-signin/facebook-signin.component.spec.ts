import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookSigninComponent } from './facebook-signin.component';

describe('FacebookSigninComponent', () => {
  let component: FacebookSigninComponent;
  let fixture: ComponentFixture<FacebookSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FacebookSigninComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacebookSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
