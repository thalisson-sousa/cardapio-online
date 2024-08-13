import { CartService } from './../../services/cart.service';
import { Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pedidos } from 'src/app/types/Pedidos';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ShowCartService } from 'src/app/services/show-cart.service';

@Component({
  selector: 'app-modal-item',
  templateUrl: './modal-item.component.html',
  styleUrls: ['./modal-item.component.scss']
})
export class ModalItemComponent implements OnInit {
  form = new FormGroup({
    qtd: new FormControl(0)
  });

  constructor(@Inject(MAT_DIALOG_DATA) public pedidos: Pedidos, private serviceCart: CartService, private formBuilder: FormBuilder, private showCart: ShowCartService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      qtd: 1
    });
  }

  addCart(data: Pedidos) {
    data.qtd = this.form.value.qtd!;
    this.serviceCart.addCart(data);
    EventEmitterService.get('updateNumberCart').emit();
    this.showCart.toggleCart(true);
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
