import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationCompteComponent } from './validation-compte.component';

describe('ValidationCompteComponent', () => {
  let component: ValidationCompteComponent;
  let fixture: ComponentFixture<ValidationCompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationCompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
