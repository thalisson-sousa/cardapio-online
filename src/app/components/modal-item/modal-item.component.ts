import { UserComponent } from './../../pages/user/user.component';
import { CartService } from './../../services/cart.service';
import { Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pedidos } from 'src/app/types/Pedidos';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-modal-item',
  templateUrl: './modal-item.component.html',
  styleUrls: ['./modal-item.component.scss']
})
export class ModalItemComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public pedidos: Pedidos, private serviceCart: CartService) { }

  addCart(data: Pedidos) {
    this.serviceCart.addCart(data);
  }
}
