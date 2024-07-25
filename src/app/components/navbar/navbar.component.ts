import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { FirebaseServiceService } from 'src/app/services/firebase.service';

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
  authenticated!: any;

  constructor(private firebaseService: FirebaseServiceService, private auth: AuthService, private route: Router) {
    EventEmitterService.get('updateNumberCart').subscribe(() => this.contador += 1);
    EventEmitterService.get('clearList').subscribe(count => this.contador = count);
  }

  ngOnInit(): void {
    this.firebaseService.getInfosPage().subscribe((data) => {
      this.name = data[0].name;
    })

    this.authenticated = this.auth.isAuthenticated();
  }

  feedback() {
    this.Cart.emit();
  }

  logout() {
    this.auth.logout();
    this.route.navigate(['/']);
  }
}
