import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
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
    this.itens = [];
  }

  add() {
     this.cartService.getCart().subscribe((cart) => {
      this.itens = cart
    })
  }

  somar(): void {
    let valor = this.itens.reduce((result, item) => {
      return (result + item.price)
    }, 0);

    this.total = valor
  }

}
