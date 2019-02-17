import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextRentalComponent } from './next-rental.component';

describe('NextRentalComponent', () => {
  let component: NextRentalComponent;
  let fixture: ComponentFixture<NextRentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextRentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
