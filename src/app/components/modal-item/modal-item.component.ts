import { CartService } from './../../services/cart.service';
import { Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pedidos } from 'src/app/types/Pedidos';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-item',
  templateUrl: './modal-item.component.html',
  styleUrls: ['./modal-item.component.scss']
})
export class ModalItemComponent implements OnInit {
  form = new FormGroup({
    qtd: new FormControl(0)
  });

  constructor(@Inject(MAT_DIALOG_DATA) public pedidos: Pedidos, private serviceCart: CartService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      qtd: 1
    });
  }

  addCart(data: Pedidos) {
    data.qtd = this.form.value.qtd!;
    this.serviceCart.addCart(data);
    EventEmitterService.get('updateNumberCart').emit();
  }

  decrement(){
    if(this.form.value.qtd! > 1) {
      this.form.value.qtd = this.form.value.qtd! - 1;
    }
  }

  increment(){
    if(this.form.value.qtd! < 10) {
      this.form.value.qtd = this.form.value.qtd! + 1;
    }
  }
}
