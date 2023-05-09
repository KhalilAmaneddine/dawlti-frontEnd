import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { AttachmentsService } from '../attachments.service';

@Component({
  selector: 'app-judicialextractdocument',
  templateUrl: './judicialextractdocument.component.html',
  styleUrls: ['./judicialextractdocument.component.css']
})
export class JudicialextractdocumentComponent {
  constructor(private http: HttpClient, private cookieService: CookieService,
    private attachmentService: AttachmentsService) { }
  
    @ViewChild('fileInput') fileInput: ElementRef<HTMLInputElement>;
    submitForm(event: Event): void {
      event.preventDefault();
      const file: File = this.fileInput.nativeElement.files[0];
      // Choose the appropriate method based on the form type
      this.attachmentService.uploadJudicial(file).subscribe(
        response => {
          console.log(response);
          // Reset the form or perform any other necessary actions
        },
        error => {
          alert(error.message);
          // Handle error cases
        }
      );
    }

}
