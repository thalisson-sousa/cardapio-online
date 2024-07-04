import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-modal-header',
  templateUrl: './admin-modal-header.component.html',
  styleUrls: ['./admin-modal-header.component.scss']
})
export class AdminModalHeaderComponent {

  form = new FormGroup({
    name: new FormControl(''),
    duration: new FormControl(''),
    image: new FormControl(''),
    capa: new FormControl('')
  });

  submit() {
    console.log(this.form.value);
  }

}
