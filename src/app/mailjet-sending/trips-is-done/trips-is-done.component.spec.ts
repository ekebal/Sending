import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsIsDoneComponent } from './trips-is-done.component';

describe('TripsIsDoneComponent', () => {
  let component: TripsIsDoneComponent;
  let fixture: ComponentFixture<TripsIsDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripsIsDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsIsDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
