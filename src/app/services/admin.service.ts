import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient, private router: Router) { }

  changeJobStatus(jobId: number, status: 'accepted' | 'rejected' ): Observable<any> {
    return this.http.put(`${this.baseUrl}/jobs/${jobId}/status`, { status }, this.getAuthHeaders());
  }

  deleteJob(jobId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/jobs/${jobId}`, this.getAuthHeaders());
  }

  getComments(): Observable<any> {
    return this.http.get(`${this.baseUrl}/comments`, this.getAuthHeaders());
  }
  
  deleteComment(commentId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/comments/${commentId}`, this.getAuthHeaders());
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
