import { Injectable } from '@angular/core';
import { FirebaseServiceService } from './firebase-service.service';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  constructor(private fireBase: FirebaseServiceService) { }

  getFoods() {
    return this.fireBase.getFoods();
  }
}
