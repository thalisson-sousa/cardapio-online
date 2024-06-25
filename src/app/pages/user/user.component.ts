import { Component, Injectable } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})

export class UserComponent {
  showCart = false;
  contador!: number;

  constructor(private cartService: CartService) {}

  onChange() {
    this.showCart = !this.showCart;
  }

}
