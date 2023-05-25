import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AttachmentsService } from '../attachments.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-judicialextractdocument',
  templateUrl: './judicialextractdocument.component.html',
  styleUrls: ['./judicialextractdocument.component.css']
})
export class JudicialextractdocumentComponent {
  constructor(private http: HttpClient, private cookieService: CookieService,
    private attachmentService: AttachmentsService,
    public snackBar: MatSnackBar, private router: Router) { }
  
    @ViewChild('fileInput') fileInput: ElementRef<HTMLInputElement>;
    submitForm(event: Event): void {
      event.preventDefault();
      const file: File = this.fileInput.nativeElement.files[0];
      this.attachmentService.uploadJudicial(file).subscribe(
        response => {
          this.router.navigate(['Home']).then((navigated: boolean) => {
            if(navigated) {
              this.snackBar.open("You Judicial Extract Document has been submitted", "Dismiss", {duration: 4000});
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
