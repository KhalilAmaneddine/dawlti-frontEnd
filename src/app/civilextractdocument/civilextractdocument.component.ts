import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AttachmentsService } from '../attachments.service';
import { CookieService } from 'ngx-cookie-service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-civilextractdocument',
  templateUrl: './civilextractdocument.component.html',
  styleUrls: ['./civilextractdocument.component.css']
})
export class CivilextractdocumentComponent {

  constructor(private http: HttpClient, private cookieService: CookieService,
    private attachmentService: AttachmentsService, public snackBar: MatSnackBar, private router: Router) { }
  
    @ViewChild('fileInput') fileInput: ElementRef<HTMLInputElement>;
    submitForm(event: Event): void {
      event.preventDefault();
      const file: File = this.fileInput.nativeElement.files[0];
    
      this.attachmentService.uploadCivil(file).subscribe(
        response => {
          this.router.navigate(['Home']).then((navigated: boolean) => {
            if(navigated) {
              this.snackBar.open("You Civil Extract Document has been submitted", "Dismiss", {duration: 4000});
            }
        });
        },
        error => {
          alert(error.message);
        }
      );
    }

    onExit() {
      location.href = 'Home';
    }
}
