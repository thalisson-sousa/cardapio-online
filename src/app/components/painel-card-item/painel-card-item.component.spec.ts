import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelCardItemComponent } from './painel-card-item.component';

describe('PainelCardItemComponent', () => {
  let component: PainelCardItemComponent;
  let fixture: ComponentFixture<PainelCardItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PainelCardItemComponent]
    });
    fixture = TestBed.createComponent(PainelCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
