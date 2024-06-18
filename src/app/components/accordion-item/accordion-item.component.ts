import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalItemComponent } from '../modal-item/modal-item.component';

import { Pedidos } from 'src/app/types/Pedidos';
import { FoodsService } from 'src/app/services/foods.service';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
})
export class AccordionItemComponent implements OnInit {
  step = 0;
  @Input() categorias!: any;
  pedidos!: Pedidos[];

  constructor(public dialog: MatDialog, private pedidoService: FoodsService) {}

  ngOnInit(): void {
    this.productsFiltered()
  }

  openDialog(id: string) {
    let currentyPedido;
    this.pedidos.filter((pedido) => pedido.id == id).map((item) => {
      currentyPedido = item
    })
    this.dialog.open(ModalItemComponent, {
      width: 'auto',
      data: currentyPedido
    })

  }

  productsFiltered() {
    this.pedidoService.getFiltered(this.categorias.categoria).subscribe((item) => {
      this.pedidos = item;
    })
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
