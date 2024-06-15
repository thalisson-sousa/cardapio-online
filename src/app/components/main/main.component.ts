import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Pedidos } from 'src/app/types/Pedidos';
import { ModalItemComponent } from '../modal-item/modal-item.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  pedido: Pedidos = {
  label: "Promoções",
  title: "Dinossauro",
  price: "R$30,00",
  description: "Acompanha carne, catupiry, ovo, queijo, apresuntado, alface e tomate. *foto ilustrativa*",
  image: "https://www.assai.com.br/sites/default/files/shutterstock_1806472312.jpg"
  }

  step = 0;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ModalItemComponent, {
      width: 'auto',
      data: this.pedido
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
