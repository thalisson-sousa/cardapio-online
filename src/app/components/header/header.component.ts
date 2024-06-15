import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  image: string = "https://img.freepik.com/fotos-gratis/hamburguer-duplo-americano-classico-isolado-no-fundo-branco_90220-1194.jpg?w=360";
  name: string = "Lanche do Mario";
  capa: string = "https://static.vecteezy.com/ti/vetor-gratis/p3/4903181-japones-comida-fundo-banner-vetor.jpg";
  button: string = "Aberto Agora";
  description: string = "50-80min";

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogBoxComponent, {
      width: '500px',
      data: 'rigth click'
    })
  }
}
