import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { FirebaseServiceService } from 'src/app/services/firebase-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  @Input() show: boolean = true;
  @Output() Cart: EventEmitter<any> = new EventEmitter();

  name!: string;
  contador: number = 0;

  constructor(private firebaseService: FirebaseServiceService) {
    EventEmitterService.get('updateNumberCart').subscribe(() => this.contador += 1);
    EventEmitterService.get('clearList').subscribe(count => this.contador = count);
  }

  ngOnInit(): void {
    this.firebaseService.getInfosPage().subscribe((data) => {
      this.name = data[0].name;
    })
  }

  feedback() {
    this.Cart.emit();
  }
}
