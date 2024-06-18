import { Component, OnInit } from '@angular/core';
import { Pedidos } from 'src/app/types/Pedidos';
import { FoodsService } from 'src/app/services/foods.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  categorias!: any;
  pedidoFiltrado!: any[];

  constructor(private pedidoService: FoodsService) {}

  ngOnInit(): void {
    this.getcategorias();
  }

  getcategorias() {
    this.pedidoService.getCategory().subscribe((category) => {
      this.categorias = category;
    });
  }
}
