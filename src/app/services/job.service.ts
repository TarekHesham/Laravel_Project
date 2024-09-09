import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private baseUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }

  getJobs(): Observable<any> {
    return this.http.get(`${this.baseUrl}/jobs`, this.getAuthHeaders(true));
  }

  getJobById(jobId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/jobs/${jobId}`, this.getAuthHeaders(true));
  }

  getJobBySlug(jobSlug: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/job/${jobSlug}`, this.getAuthHeaders(true));
  }

  createJob(jobData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/jobs`, jobData, this.getAuthHeaders());
  }

  updateJob(jobId: number, jobData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/jobs/${jobId}`, jobData, this.getAuthHeaders());
  }

  cancelJob(jobId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/jobs/${jobId}`, this.getAuthHeaders());
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
