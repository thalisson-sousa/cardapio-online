import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FirebaseServiceService } from 'src/app/services/firebase.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-modal-food',
  templateUrl: './modal-food.component.html',
  styleUrls: ['./modal-food.component.scss']
})
export class ModalFoodComponent implements OnInit {
  categorys!: any;

  form = new FormGroup({
    categoria: new FormControl(''),
    description: new FormControl(''),
    img: new FormControl(''),
    price: new FormControl(0),
    title: new FormControl('')
  });

  constructor(private formBuilder: FormBuilder, private storegeService: StorageService, private service: FirebaseServiceService, @Inject(MAT_DIALOG_DATA) public id: number) {}

  ngOnInit(): void {
    if(this.id != 0) {
      this.service.getFoods().subscribe(itens => {
        itens.filter((item) => item.id == String(this.id)).map((food) => {

          this.form = this.formBuilder.group({
            categoria: `${food.categoria}`,
            description: `${food.description}`,
            img: `${food.img}`,
            price: food.price,
            title: `${food.title}`,
          })
        })
      })
    } else {
      this.form = this.formBuilder.group({
        categoria: '',
        description: '',
        img: '',
        price: 0,
        title: '',
      })
    }
    this.getCategoria();
  }

  async submit() {
    await this.service.addLanche(this.form.value);
  }

  async update() {
    this.service.updateLanche(this.form.value, this.id)
  }

  async getCategoria() {
    await this.service.getCategory().subscribe((data) => {
      this.categorys = data;
    })
  }

  async handleImageChange(event: any) {
    const file = event.target.files[0];
    if(file) {
      const url = await this.storegeService.uploadCapa(file);
      this.form.value.img = url;
    }
  }

}
