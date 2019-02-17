import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeToKirrkComponent } from './welcome-to-kirrk.component';

describe('WelcomeToKirrkComponent', () => {
  let component: WelcomeToKirrkComponent;
  let fixture: ComponentFixture<WelcomeToKirrkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeToKirrkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeToKirrkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
