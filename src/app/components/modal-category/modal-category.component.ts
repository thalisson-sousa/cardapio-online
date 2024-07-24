import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  constructor(private formBuilder: FormBuilder, private service: FirebaseServiceService, @Inject(MAT_DIALOG_DATA) public id: number) {}

  ngOnInit(): void {
    if(this.id != 0) {
      this.service.getCategory().subscribe(itens => {
        itens.filter((item) => item.id == this.id).map((category) => {

          this.form = this.formBuilder.group({
            categoria: `${category.categoria}`
          })
        })
      })
    } else {
      this.form = this.formBuilder.group({
        categoria: ''
      })
    }
  }

  async submit() {
    //console.log(this.form.value);
    await this.service.addCategoria(this.form.value);
  }

  async update() {
    this.service.updateCategoria(this.form.value, this.id)
  }

}
