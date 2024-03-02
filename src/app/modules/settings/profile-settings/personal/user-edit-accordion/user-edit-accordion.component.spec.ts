import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditAccordionComponent } from './user-edit-accordion.component';

describe('UserEditAccordionComponent', () => {
  let component: UserEditAccordionComponent;
  let fixture: ComponentFixture<UserEditAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserEditAccordionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserEditAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
