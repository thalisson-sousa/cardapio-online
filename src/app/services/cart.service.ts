import { Injectable } from '@angular/core';
import { Pedidos } from '../types/Pedidos';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Pedidos[] = [];

  constructor() { }

   addCart(pedido: Pedidos) {
    this.cart.push(pedido);
  }

  getCart(): Pedidos[] {
    return this.cart;
  }


}
