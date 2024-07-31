import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { CepService } from 'src/app/services/cep.service';
import { OrderService } from 'src/app/services/order.service';
import { Cep } from 'src/app/types/Cep';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  isLinear = false;
  data!: Cep;

  identifier = new FormGroup({
    name: new FormControl ('', [Validators.required]),
    email: new FormControl ('', [Validators.email]),
    contact: new FormControl('', [Validators.required]),
  });

  address = new FormGroup({
    cep: new FormControl ('', [Validators.required]),
    numHouse: new FormControl ('', [Validators.required]),
  });

  constructor(private formBuilder: FormBuilder, private cepService: CepService, private order: OrderService) {}

  ngOnInit(): void {
    this.identifier = this.formBuilder.group({
      name: '',
      email: '',
      contact: ''
    });
  }

  cep(event: any) {
    const cep = event.target.value;
    this.cepService.getCep(cep).subscribe(item => {
      this.data = item;
    });
  }

  submit() {
    this.order.addOrder(this.identifier.value, this.address.value, this.data)
  }

}
