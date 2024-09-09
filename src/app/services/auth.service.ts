import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) {
  }

  getToken(){
    let body = {
      'email' : 'esraagamal@gmail.com',
      'password': '123456789'
    };
    return this.httpClient.post("http://localhost:8000/api/login", body);
  }
}
