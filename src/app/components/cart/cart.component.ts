import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { Pedidos } from 'src/app/types/Pedidos';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  itens: Pedidos[] = [];
  total = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.add()
  }

  clear() {
    while(this.itens.length) {
      this.itens.pop()
    }
    EventEmitterService.get('clearList').emit(0);
  }

  add() {
     this.cartService.getCart().subscribe((cart) => {
      this.itens = cart
    })
  }

  somar(): void {
    let valor = this.itens.reduce((result, item) => {
      return (result + (item.price * item.qtd))
    }, 0);

    this.total = valor
  }

}
