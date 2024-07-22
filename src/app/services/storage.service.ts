import { Injectable } from '@angular/core';
import { AngularFireStorage } from "@angular/fire/compat/storage";


@Injectable({
  providedIn: 'root'
})
export class StorageService {


  constructor(private fireStorage: AngularFireStorage) { }

  async uploadCapa(file: any) {
    const path = `capa/${file.name}`;
    const uploadTask = await this.fireStorage.upload(path, file);
    const url = await uploadTask.ref.getDownloadURL();
    return url;
  }

  async uploadImage(file: any) {
    const path = `image/${file.name}`;
    const uploadTask = await this.fireStorage.upload(path, file);
    const url = await uploadTask.ref.getDownloadURL();
    return url;
  }
}
