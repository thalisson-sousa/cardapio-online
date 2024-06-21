import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  showCart = false;

  onChange() {
    this.showCart = !this.showCart;
  }
}
