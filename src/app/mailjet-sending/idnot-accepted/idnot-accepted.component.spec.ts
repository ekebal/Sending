import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IDNotAcceptedComponent } from './idnot-accepted.component';

describe('IDNotAcceptedComponent', () => {
  let component: IDNotAcceptedComponent;
  let fixture: ComponentFixture<IDNotAcceptedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IDNotAcceptedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IDNotAcceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
