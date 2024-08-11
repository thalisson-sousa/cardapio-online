import { inject, Injectable } from '@angular/core';
import { Firestore, collection, collectionData, query, where } from '@angular/fire/firestore';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  firestore = inject(Firestore);
  orderCollection = collection(this.firestore, 'orders');

  constructor() {}

  getOrders(): Observable<any[]> {
    return collectionData(this.orderCollection, {
      idField: 'id',
    }) as Observable<any[]>;
  }

  getOrdersFilterByStaus(status: string): Observable<any[]> {
    return collectionData(
      query(this.orderCollection, where('status', '==', `${status}`)),
      {
        idField: 'id',
      }
    ) as Observable<any[]>;
  }

   async updateOrder(data: any, status: any) {
    data.status = status;
    await updateDoc(doc(this.orderCollection, data.id), data)
  }

  async addOrder(identifier: any, address: any, valor: number, pedido: string, Quantidade: any) {
    let dataPedido = new Date()
    let status: string = "novo";

    const data = {...identifier, ...address, valor, pedido, Quantidade, dataPedido, status}
    await setDoc(doc(this.orderCollection), data);
  }
}
