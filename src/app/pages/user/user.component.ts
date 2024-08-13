import { Component, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { CartService } from 'src/app/services/cart.service';
import { ShowCartService } from 'src/app/services/show-cart.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  showCart = false;
  contador!: number;
  navType: MatDrawerMode = 'side'; // Defina um valor padrão aqui

  constructor(private cartService: CartService, public showCartService: ShowCartService) {}

  ngOnInit(): void {
    if (window.innerWidth < 768) { // Exemplo: mudar para 'over' em telas menores que 768px
      this.navType = 'over' as MatDrawerMode;
    }

    this.showCartService.showCart$.subscribe(show => {
      this.showCart = show;
    });

  }

  onChange() {
    this.showCart = !this.showCart;
  }
}
