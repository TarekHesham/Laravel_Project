import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {
  private baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  getJobs(): Observable<any> {
    return this.http.get(`${this.baseUrl}/employer/jobs`, this.getAuthHeaders());
  }

  createJob(jobData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/jobs`, jobData, this.getAuthHeaders());
  }

  updateJob(jobId: number, jobData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/jobs/${jobId}`, jobData, this.getAuthHeaders());
  }

  cancelJob(jobId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/employer/${jobId}/cancel`, this.getAuthHeaders());
  }

  private getAuthHeaders(): { headers: HttpHeaders } | undefined {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Missing token...');
    }
    return token ? { headers: new HttpHeaders({ 'Authorization': token }) } : undefined;
  }
}
