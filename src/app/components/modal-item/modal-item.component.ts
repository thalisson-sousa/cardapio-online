import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pedidos } from 'src/app/types/Pedidos';

@Component({
  selector: 'app-modal-item',
  templateUrl: './modal-item.component.html',
  styleUrls: ['./modal-item.component.scss']
})
export class ModalItemComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public pedidos: Pedidos) { }

}
