import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {
  private baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient, private router: Router) { }

  getJobs(): Observable<any> {
    return this.http.get(`${this.baseUrl}/employer/jobs`, this.getAuthHeaders());
  }

  createJob(jobData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/jobs`, jobData, this.getAuthHeaders());
  }

  updateJob(jobId: number, jobData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/jobs/${jobId}`, jobData, this.getAuthHeaders());
  }

  cancelJob(jobId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/employer/${jobId}/cancel`, {},this.getAuthHeaders());
  }

  private getAuthHeaders(): { headers: HttpHeaders } {
    const token = localStorage.getItem('token');
    if (!token) {
      // Token is missing, handle this case appropriately
      this.router.navigate(['/login']);
      throw new Error('Missing token...');
    }

    return { headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` }) };
  }
}
