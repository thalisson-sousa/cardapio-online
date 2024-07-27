import { Injectable } from '@angular/core';
import { Pedidos } from '../types/Pedidos';
import { Observable, of } from 'rxjs';
import { UserComponent } from '../pages/user/user.component';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  carts: Pedidos[] = [];

  constructor() {}

  addCart(pedido: Pedidos) {
    if(this.carts.includes(pedido)) {
      this.carts.splice(this.carts.indexOf(pedido), 1, pedido)
    } else {
      this.carts.push(pedido);
    }
  }

  getCart(): Observable<Pedidos[]> {
    const cart = of(this.carts);
    return cart;
  }
}
