import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { FirebaseServiceService } from 'src/app/services/firebase-service.service';
import { Pedidos } from 'src/app/types/Pedidos';
import { FoodsService } from 'src/app/services/foods.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

  categorys!: any;
  pedidos!: Pedidos[];

  constructor(private firebaseService: FirebaseServiceService, private pedidoService: FoodsService) {}

  ngOnInit(): void {
    this.firebaseService.getCategory().subscribe((category) => {
      this.categorys = category;
    });

    this.pedidoService.getFoods().subscribe((pedido) => {
      this.pedidos = pedido;
    })
  }

  removeCategoria(id: any) {
    console.log("removeu categoria")
    this.firebaseService.deletarCategoria(id);
  }

  removeItem(id: any) {
    console.log(`removeu lanche ${id}`)
    this.firebaseService.deletarLanche(id);
  }
}
