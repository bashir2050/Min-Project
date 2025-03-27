import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {



  private authUrl = 'https://fakestoreapi.com/auth/login';
  private userUrl = 'https://fakestoreapi.com/users/1'; // Fetch a user example
  private userSubject = new BehaviorSubject<any | null>(null);
  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) {
    const user = localStorage.getItem('user');
    if (user) this.userSubject.next(JSON.parse(user));
  }

  login(username: string, password: string) {
    return this.http.post<{ token: string }>(this.authUrl, { username, password }).pipe(
      tap((response) => {
        localStorage.setItem('token', response.token);
        this.getUserDetails();
      })
    );
  }

  getUserDetails() {
    this.http.get(this.userUrl).subscribe(user => {
      localStorage.setItem('user', JSON.stringify(user));
      this.userSubject.next(user);
    });
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.userSubject.next(null);
  }

  isAuthenticated() {
    return !!localStorage.getItem('token');
  }
}