import { Component, EventEmitter, Injectable, Input, Output, signal } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
  @Output() Cart: EventEmitter<any> = new EventEmitter();

  name: string = "Mario Lanches";

  constructor() {}

  feedback() {
    this.Cart.emit();
  }
}
