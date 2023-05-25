import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string = 'http://localhost:8090/api/v1/user';
  constructor(private http: HttpClient) { }

  public register(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/register`, user);
  }

  public login(email: string, password: string): Observable<string> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(email + ':' + password) });
    return this.http.post(`${this.apiUrl}/login`, '', {headers, responseType: 'text'});
  }

  
  

  

  
}
