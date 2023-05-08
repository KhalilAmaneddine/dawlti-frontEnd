import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { User } from './user';
import { UserDTO } from './user-dto';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private apiUrl: string = 'http://localhost:8090/api/v1/user'
  constructor(private http: HttpClient, private cookieService: CookieService) { }

  public getUsers(): Observable<UserDTO[]> {
    const token = this.cookieService.get('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<UserDTO[]>(`${this.apiUrl}/admin/getUsers`, {headers});
  }

  public deleteUser(email: string): Observable<void> {
    const token = this.cookieService.get('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete<void>(`${this.apiUrl}/admin/deleteUser/${email}`, {headers});
  }
}
