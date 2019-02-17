import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverLicenceNotAcceptedComponent } from './driver-licence-not-accepted.component';

describe('DriverLicenceNotAcceptedComponent', () => {
  let component: DriverLicenceNotAcceptedComponent;
  let fixture: ComponentFixture<DriverLicenceNotAcceptedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverLicenceNotAcceptedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverLicenceNotAcceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
