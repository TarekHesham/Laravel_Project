import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient, private router: Router) { }

  getJobs(): Observable<any> {
    return this.http.get(`${this.baseUrl}/jobs`, this.getAuthHeaders());
  }

  getJobById(jobId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/jobs/${jobId}`, this.getAuthHeaders());
  }

  getJobBySlug(jobSlug: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/job/${jobSlug}`, this.getAuthHeaders());
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
