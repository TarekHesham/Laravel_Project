import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private baseUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }

  applyApplication(applyData: object): Observable<any> {
    return this.http.post(`${this.baseUrl}/application`, applyData,this.getAuthHeaders());
  }

  cancelApplication(jobId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/application/${jobId}`, this.getAuthHeaders());
  }

  getApplications(): Observable<any> {
    return this.http.get(`${this.baseUrl}/application`, this.getAuthHeaders());
  }

  getApplicationById(applicationId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/application/${applicationId}`, this.getAuthHeaders());
  }

  private getAuthHeaders(): { headers: HttpHeaders } | undefined {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Missing token...');
    }
    return token ? { headers: new HttpHeaders({ 'Authorization': token }) } : undefined;
  }
}
