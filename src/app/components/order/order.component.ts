import { Component } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CepService } from 'src/app/services/cep.service';
import { Cep } from 'src/app/types/Cep';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  isLinear = false;
  data!: Cep;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder, private cepService: CepService) {}

  cep(event: any) {
    const cep = event.target.value;
    this.cepService.getCep(cep).subscribe(item => {
      this.data = item;
    });
  }

}
