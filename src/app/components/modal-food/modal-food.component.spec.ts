import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFoodComponent } from './modal-food.component';

describe('ModalFoodComponent', () => {
  let component: ModalFoodComponent;
  let fixture: ComponentFixture<ModalFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalFoodComponent]
    });
    fixture = TestBed.createComponent(ModalFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
