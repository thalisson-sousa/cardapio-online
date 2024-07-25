import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FirebaseServiceService } from 'src/app/services/firebase.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-admin-modal-header',
  templateUrl: './admin-modal-header.component.html',
  styleUrls: ['./admin-modal-header.component.scss']
})
export class AdminModalHeaderComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl(''),
    duration: new FormControl(''),
    image: new FormControl(''),
    capa: new FormControl('')
  });

  constructor(private firebaseService: FirebaseServiceService, private storegeService: StorageService , private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.firebaseService.getInfosPage().subscribe(data => {

      this.form = this.formBuilder.group({
        name: [data[0].name],
        duration: [data[0].duration],
        image: [data[0].image],
        capa: [data[0].capa]
      })
    });
  }

  async handleCapaChange(event: any) {
    const file = event.target.files[0];
    if(file) {
      const url = await this.storegeService.uploadCapa(file);
      this.form.value.capa = url;
      console.log(url);
    }
  }

  async handleImageChange(event: any) {
    const file = event.target.files[0];
    if(file) {
      const url = await this.storegeService.uploadCapa(file);
      this.form.value.image = url;
      console.log(url);
    }
  }

  submit() {
    console.log(this.form.value);
    this.firebaseService.updateHeader(this.form.value);
  }

}
