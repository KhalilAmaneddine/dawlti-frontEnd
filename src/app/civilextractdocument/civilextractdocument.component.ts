import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormSubmissionsService } from '../form-submissions.service';
import { CivilDocument } from '../civil-document';
import { Form } from '../form';
import { User } from '../user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AttachmentsService } from '../attachments.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-civilextractdocument',
  templateUrl: './civilextractdocument.component.html',
  styleUrls: ['./civilextractdocument.component.css']
})
export class CivilextractdocumentComponent {

  constructor(private http: HttpClient, private cookieService: CookieService,
    private attachmentService: AttachmentsService) { }
  
    @ViewChild('fileInput') fileInput: ElementRef<HTMLInputElement>;
    submitForm(event: Event): void {
      event.preventDefault();
      const file: File = this.fileInput.nativeElement.files[0];
    
      this.attachmentService.uploadCivil(file).subscribe(
        response => {
          console.log(response);
        },
        error => {
          alert(error.message);
        }
      );
    }
}
