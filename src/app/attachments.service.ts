import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttachmentsService {

  private apiUrl: string = 'http://localhost:8090/api/v1/attachment';
  
  constructor(private http: HttpClient, private cookieService: CookieService) { }
  
  uploadCivil(file: File): Observable<string> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const token = this.cookieService.get('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    return this.http.post(`${this.apiUrl}/civil`, formData, {headers, responseType:'text'});
  }

  uploadJudicial(file: File): Observable<string> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const token = this.cookieService.get('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    return this.http.post(`${this.apiUrl}/judicial`, formData, {headers, responseType:'text'});
  }
  
}
