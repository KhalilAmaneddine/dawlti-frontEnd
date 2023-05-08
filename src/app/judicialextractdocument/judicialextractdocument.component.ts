import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-judicialextractdocument',
  templateUrl: './judicialextractdocument.component.html',
  styleUrls: ['./judicialextractdocument.component.css']
})
export class JudicialextractdocumentComponent {
  constructor(private http: HttpClient, private cookieService: CookieService) { }
  
  private apiUrl: string = 'http://localhost:8090/api/v1/attachment';

  
}
