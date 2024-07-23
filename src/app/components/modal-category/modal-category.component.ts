import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FirebaseServiceService } from 'src/app/services/firebase-service.service';

@Component({
  selector: 'app-modal-category',
  templateUrl: './modal-category.component.html',
  styleUrls: ['./modal-category.component.scss']
})
export class ModalCategoryComponent implements OnInit {

  form = new FormGroup({
    categoria: new FormControl('')
  });

  constructor(private formBuilder: FormBuilder, private service: FirebaseServiceService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      categoria: ''
    })
  }

  async submit() {
    console.log(this.form.value);
    await this.service.addCategoria(this.form.value);
  }

}
