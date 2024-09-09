import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  login(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/login`, userData);
  }

  logout(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/logout`, this.getAuthHeaders(true));
  }

  register(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/register`, userData);
  }

  getUser(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/user`, this.getAuthHeaders());
  }

  private getAuthHeaders(logout = false): { headers: HttpHeaders } | undefined {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Missing token...');
    }
    
    if (logout) {
      localStorage.removeItem('token');
    }
    return token ? { headers: new HttpHeaders({ 'Authorization': token }) } : undefined;
  }
}