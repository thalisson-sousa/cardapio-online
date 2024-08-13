import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowCartService {
  private showCartSource = new BehaviorSubject<boolean>(false);
  showCart$ = this.showCartSource.asObservable();

  toggleCart(show: boolean) {
    this.showCartSource.next(show);
  }

}
