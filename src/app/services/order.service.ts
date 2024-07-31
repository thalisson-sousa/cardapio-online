import { inject, Injectable } from '@angular/core';
import { Firestore, collection } from '@angular/fire/firestore';
import { doc, setDoc } from 'firebase/firestore';
import { Cep } from '../types/Cep';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  firestore = inject(Firestore);
  categoryCollection = collection(this.firestore, 'orders');

  constructor() {}

  async addOrder(identifier: any, address: any, cep: Cep) {
    const data = {...identifier, ...address, ...cep}
    await setDoc(doc(this.categoryCollection), data);
  }
}
