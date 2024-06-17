import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Pedidos } from 'src/app/types/Pedidos';
import { ModalItemComponent } from '../modal-item/modal-item.component';
import { FoodsService } from 'src/app/services/foods.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  // pedido: Pedidos = {
  // label: "Promoções",
  // title: "Dinossauro",
  // price: "R$30,00",
  // description: "Acompanha carne, catupiry, ovo, queijo, apresuntado, alface e tomate. *foto ilustrativa*",
  // image: "https://www.assai.com.br/sites/default/files/shutterstock_1806472312.jpg"
  // }

  pedidos!: Pedidos[];

  step = 0;

  constructor(public dialog: MatDialog, private pedidoService: FoodsService) {}

  ngOnInit(): void {
    this.getPedidos();
  }

  getPedidos() {
    this.pedidoService.getFoods().subscribe((food) => {
      this.pedidos = food;
    })
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
