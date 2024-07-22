import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { EventEmitterService } from 'src/app/services/event-emitter.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
  @Input() show: boolean = true;
  @Output() Cart: EventEmitter<any> = new EventEmitter();

  name: string = "Mario Lanches";
  contador: number = 0;

  constructor() {
    EventEmitterService.get('updateNumberCart').subscribe(() => this.contador += 1);
    EventEmitterService.get('clearList').subscribe(count => this.contador = count);
  }

  feedback() {
    this.Cart.emit();
  }
}
