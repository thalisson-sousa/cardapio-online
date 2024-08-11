import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelCardCentralComponent } from './painel-card-central.component';

describe('PainelCardCentralComponent', () => {
  let component: PainelCardCentralComponent;
  let fixture: ComponentFixture<PainelCardCentralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PainelCardCentralComponent]
    });
    fixture = TestBed.createComponent(PainelCardCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
