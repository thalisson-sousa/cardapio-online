import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {
  novo!: any[];
  preparando!: any[];
  pronto!: any[];
  entrega!: any[];

  panelOpenState = false;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    //Busca novos pedidos
    this.orderService.getOrdersFilterByStaus('novo').subscribe((order) => {
      this.novo = order;
    })

    //Busca pedidos em andamento
    this.orderService.getOrdersFilterByStaus('preparando').subscribe((order) => {
      this.preparando = order;
    })

    //Busca pedidos Prontos
    this.orderService.getOrdersFilterByStaus('pronto').subscribe((order) => {
      this.pronto = order;
    })

    //Busca pedidos que sairam para a entrega
    this.orderService.getOrdersFilterByStaus('entrega').subscribe((order) => {
      this.entrega = order;
    })
  }

  update(data: any) {
    switch(data.status) {
      case "novo":
        this.orderService.updateOrder(data, "preparando");
        break;
      case "preparando":
        this.orderService.updateOrder(data, "pronto");
        break;
      case "pronto":
        this.orderService.updateOrder(data, "entrega");
        break;
      case "entrega":
        this.orderService.updateOrder(data, "concluido");
        break;
    }
    //console.log(id, status);
  }

}
