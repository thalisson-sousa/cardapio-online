import { Injectable } from '@angular/core';
import { FirebaseServiceService } from './firebase-service.service';

@Injectable({
  providedIn: 'root',
})
export class FoodsService {
  constructor(private fireBase: FirebaseServiceService) {}

  getInfosPage() {
    return this.fireBase.getInfosPage();
  }

  getFoods() {
    return this.fireBase.getFoods();
  }

  getCategory() {
    return this.fireBase.getCategory();
  }

  getFiltered(categoria: any) {
    return this.fireBase.getFoodsFilter(categoria);
  }
}
