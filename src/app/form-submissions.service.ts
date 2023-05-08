import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FormSubmission } from './formSubmission';
import { Observable } from 'rxjs';
import { CivilExtractData } from './civil-extract-data';
import { JudicialExtractData } from './judicial-extract-data';

@Injectable({
  providedIn: 'root'
})
export class FormSubmissionsService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }
  
  private apiUrl: string = 'http://localhost:8090/api/v1/formsubmission';

  public saveExtract(extract: FormSubmission, id: number): Observable<FormSubmission> {
    const token = this.cookieService.get('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<FormSubmission>(`${this.apiUrl}/save/${id}`, extract, {headers})
  }

  public submitExtract(extract: FormSubmission, id: number): Observable<FormSubmission> {
    const token = this.cookieService.get('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<FormSubmission>(`${this.apiUrl}/submit/${id}`, extract, {headers})
  }

    public getCivilExtractData(id: number): Observable<CivilExtractData> {
    const token = this.cookieService.get('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<CivilExtractData>(`${this.apiUrl}/getSavedData/${id}`,{headers});
  } 

  public deleteExtract(id: number): Observable<void> {
    const token = this.cookieService.get('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete<void>(`${this.apiUrl}/deleteExtract/${id}`,{headers});
  }

 
  public getJudicialExtractData(id: number): Observable<JudicialExtractData> {
    const token = this.cookieService.get('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<JudicialExtractData>(`${this.apiUrl}/getSavedData/${id}`,{headers});
  } 
   
  public formPrinted(form: string): Observable<void> {
    const token = this.cookieService.get('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<void>(`${this.apiUrl}/formPrinted`, form, {headers});
  }

  public getHistory(id: number): Observable<string[]> {
    const token = this.cookieService.get('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<string[]>(`${this.apiUrl}/history/${id}`, {headers});
  }
  
}
