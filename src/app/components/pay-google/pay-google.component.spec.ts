import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayGoogleComponent } from './pay-google.component';

describe('PayGoogleComponent', () => {
  let component: PayGoogleComponent;
  let fixture: ComponentFixture<PayGoogleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PayGoogleComponent]
    });
    fixture = TestBed.createComponent(PayGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
