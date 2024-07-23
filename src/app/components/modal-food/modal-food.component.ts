import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FirebaseServiceService } from 'src/app/services/firebase-service.service';

@Component({
  selector: 'app-modal-food',
  templateUrl: './modal-food.component.html',
  styleUrls: ['./modal-food.component.scss']
})
export class ModalFoodComponent implements OnInit {

  form = new FormGroup({
    categoria: new FormControl(''),
    description: new FormControl(''),
    img: new FormControl(''),
    price: new FormControl(0),
    title: new FormControl('')
  });

  constructor(private formBuilder: FormBuilder, private service: FirebaseServiceService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      categoria: '',
      description: '',
      img: '',
      price: 0,
      title: '',
    })
  }

  async submit() {
    await this.service.addLanche(this.form.value);
  }

}
