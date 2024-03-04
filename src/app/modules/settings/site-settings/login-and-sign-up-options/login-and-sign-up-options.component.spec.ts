import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAndSignUpOptionsComponent } from './login-and-sign-up-options.component';

describe('LoginAndSignUpOptionsComponent', () => {
  let component: LoginAndSignUpOptionsComponent;
  let fixture: ComponentFixture<LoginAndSignUpOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginAndSignUpOptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginAndSignUpOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
