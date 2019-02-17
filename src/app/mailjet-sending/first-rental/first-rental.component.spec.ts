import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstRentalComponent } from './first-rental.component';

describe('FirstRentalComponent', () => {
  let component: FirstRentalComponent;
  let fixture: ComponentFixture<FirstRentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstRentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
