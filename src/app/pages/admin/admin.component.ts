import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { FirebaseServiceService } from 'src/app/services/firebase.service';
import { Pedidos } from 'src/app/types/Pedidos';
import { FoodsService } from 'src/app/services/foods.service';
import { MatDialog } from '@angular/material/dialog';
import { AdminModalHeaderComponent } from 'src/app/components/admin-modal-header/admin-modal-header.component';
import { ModalCategoryComponent } from 'src/app/components/modal-category/modal-category.component';
import { ModalFoodComponent } from 'src/app/components/modal-food/modal-food.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

  categorys!: any;
  pedidos!: Pedidos[];

  constructor(private firebaseService: FirebaseServiceService, private pedidoService: FoodsService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.firebaseService.getCategory().subscribe((category) => {
      this.categorys = category;
    });

    this.pedidoService.getFoods().subscribe((pedido) => {
      this.pedidos = pedido;
    })
  }

  openDialog() {
    this.dialog.open(AdminModalHeaderComponent)
  }

  categoryDialog(id: any) {
    this.dialog.open(ModalCategoryComponent, {
      width: 'auto',
      data: id,
    })
  }

  foodDialog(id: any) {
    this.dialog.open(ModalFoodComponent, {
      width: 'auto',
      data: id,
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
