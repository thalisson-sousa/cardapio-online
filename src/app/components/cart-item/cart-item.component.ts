import { Component, Input } from '@angular/core';
import { Pedidos } from 'src/app/types/Pedidos';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() item!: Pedidos;
}
