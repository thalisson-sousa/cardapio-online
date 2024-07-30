import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CepService {
  url = "https://viacep.com.br/ws/";

  constructor(private http: HttpClient) { }

  getCep(cep: any): Observable<any> {
    const address = this.http.get(`${this.url}/${cep}/json/`);
    return address;
  }
}
