import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Pedidos } from '../types/Pedidos';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {
  firestore = inject(Firestore)
  foodsCollection = collection(this.firestore, 'lanches')

  constructor() { }

  getFoods(): Observable<Pedidos[]> {
    return collectionData(this.foodsCollection, {
      idField: 'id'
    }) as Observable<Pedidos[]>;
  }
}
