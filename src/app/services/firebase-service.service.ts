import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  query,
  where,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Pedidos } from '../types/Pedidos';

@Injectable({
  providedIn: 'root',
})
export class FirebaseServiceService {
  firestore = inject(Firestore);
  foodsCollection = collection(this.firestore, 'lanches');
  categoryCollection = collection(this.firestore, 'categoria');

  constructor() {}

  getFoods(): Observable<Pedidos[]> {
    return collectionData(this.foodsCollection, {
      idField: 'id',
    }) as Observable<Pedidos[]>;
  }

  getFoodsFilter(categoria: any): Observable<Pedidos[]> {
    return collectionData(
      query(this.foodsCollection, where('categoria', '==', `${categoria}`)),
      {
        idField: 'id',
      }
    ) as Observable<Pedidos[]>;
  }

  getCategory(): Observable<any[]> {
    return collectionData(this.categoryCollection, {
      idField: 'id',
    }) as Observable<any[]>;
  }
}
