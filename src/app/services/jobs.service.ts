import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private httpClient:HttpClient, private authService:AuthService) { 

  }


  getJobs(token:any){
    console.log(token);
    let http = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+ token.access_token,
        
      })
    }
    return this.httpClient.get('http://localhost:8000/api/employer/jobs', http);
  }
}
