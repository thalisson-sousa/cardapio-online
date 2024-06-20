import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() Cart = new EventEmitter();

  name: string = "Mario Lanches";
  contador: string = "1";

  feedback() {
    this.Cart.emit();
  }
}
