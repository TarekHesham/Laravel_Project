import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://127.0.0.1:8000';
  private userData = new BehaviorSubject<object>({});
  userData$ = this.userData.asObservable();

  constructor(private http: HttpClient,private router: Router) {
    this.userData.next(this.getUserData);
  }

  get getUserData() {
    const data =localStorage.getItem('user');
    return data ? JSON.parse(data) : {};
  }

  login(userData: any): Observable<any> {
    // call api
    return this.http.post(`${this.baseUrl}/api/login`, userData).pipe(
      tap((response: any) => {
        localStorage.setItem('token', `${response.token_type} ${response.access_token}`);
        this.http.get(`${this.baseUrl}/api/user`, this.getAuthHeaders())
        .pipe(tap(res => {
          console.log(res);
            localStorage.setItem('user', JSON.stringify(res));
            this.userData.next(res);
            this.router.navigate(['']);
          }),
          catchError(error => {
            console.error('Error fetching user:', error);
            this.router.navigate(['/login']);
            return of(null); 
          })).subscribe();
      }),
      catchError(error => {
        console.error('Error fetching token:', error);
        this.router.navigate(['/login']);
        return of(null); 
      })
    );
  }

  logout(): Observable<any> {
    // Remove token from local storage
    localStorage.removeItem('token');

    // Remove user data from local storage
    localStorage.removeItem('user');
    this.userData.next({});
    return this.http.get(`${this.baseUrl}/api/logout`, this.getAuthHeaders());
  }

  register(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/register`, userData);
  }

  getUser(): Observable<any> {
    const userDataCached = localStorage.getItem('user');
    if (!userDataCached) {
      this.router.navigate(['/login']);
      return of(null);
    }
    return of(JSON.parse(userDataCached));
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