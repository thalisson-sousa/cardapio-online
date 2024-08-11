import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-painel-card-central',
  templateUrl: './painel-card-central.component.html',
  styleUrls: ['./painel-card-central.component.scss']
})
export class PainelCardCentralComponent {
  @Input() title!: string;

}
