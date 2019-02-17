import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationManuelComponent } from './validation-manuel.component';

describe('ValidationManuelComponent', () => {
  let component: ValidationManuelComponent;
  let fixture: ComponentFixture<ValidationManuelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationManuelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationManuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
