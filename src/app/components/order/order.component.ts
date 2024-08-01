import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CepService } from 'src/app/services/cep.service';
import { OrderService } from 'src/app/services/order.service';
import { Cep } from 'src/app/types/Cep';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  isLinear = false;
  state!: any;
  frete: number = 5;
  total!: number;

  data: Cep = {
    logradouro: '',
    complemento: '',
    cep: '',
    bairro: '',
    localidade: '',
    uf: '',
    casa: ''
  };

  identifier = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email]),
    contact: new FormControl('', [Validators.required]),
  });

  address = new FormGroup({
    cep: new FormControl('', [Validators.required]),
    numHouse: new FormControl('', [Validators.required]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private cepService: CepService,
    private order: OrderService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.state = navigation?.extras.state?.['data'];

    let valor = this.state.reduce(
      (
        result: any,
        item: {
          qtd: any;
          price: any;
        }
      ) => {
        return result + item.price * item.qtd;
      },
      0
    );
    this.total = valor + this.frete;
  }

  ngOnInit(): void {
    this.identifier = this.formBuilder.group({
      name: '',
      email: '',
      contact: '',
    });
    this.cdr.detectChanges();
  }

  getNum(event: any) {
    this.data.casa = event.target.value;
  }

  cep(event: any) {
    const cep = event.target.value;
    this.cepService.getCep(cep).subscribe((item) => {
      this.data.bairro = item.bairro;
      this.data.cep = cep;
      this.data.complemento = item.complemento;
      this.data.localidade = item.localidade;
      this.data.logradouro = item.logradouro;
      this.data.uf = item.uf;
    });
  }

  submit() {
    this.state.map((item: any) => {
      let Pedido = item.title;
      let Quantidade = item.qtd;
      let Valor = item.price * item.qtd;
      this.order.addOrder(this.identifier.value, this.data, Valor, Pedido, Quantidade);
    })
  }
}
