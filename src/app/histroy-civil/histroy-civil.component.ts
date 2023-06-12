import { Component, OnInit } from '@angular/core';
import { FormSubmissionsService } from '../form-submissions.service';
import { CivilExtractData } from '../civil-extract-data';
import { HttpErrorResponse } from '@angular/common/http';
import { FormSubmission } from '../formSubmission';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogComponent } from '../dialog/dialog.component';
import { merge } from 'rxjs';

@Component({
  selector: 'app-histroy-civil',
  templateUrl: './histroy-civil.component.html',
  styleUrls: ['./histroy-civil.component.css']
})
export class HistroyCivilComponent implements OnInit{
i: any;

  constructor(private formSubmissionService: FormSubmissionsService, private router: Router,
    public dialog: MatDialog, public snackBar: MatSnackBar){}

  ngOnInit(): void {
    this.getHistory();
   
  }

  civilExtractData: CivilExtractData[];

  data: string[] = [];

  civilExtracts: FormSubmission[];

  
  getHistory() {

    this.formSubmissionService.getHistory(1).subscribe(
      (response: FormSubmission[]) => {
        
        this.civilExtracts = response;
        for(let i = 0; i < response.length; i++) {
          this.data[i] = response[i].formData;
        }
        this.civilExtractData = this.data.map((formData: string) => {
          const dataObj = JSON.parse(formData);
          const civilData = new CivilExtractData();
          civilData.governerate = dataObj.governerate;
          civilData.district = dataObj.district;
          civilData.fname = dataObj.fname;
          civilData.surname = dataObj.surname;
          civilData.fathersname = dataObj.fathersname;
          civilData.mothersname = dataObj.mothersname;
          civilData.pob = dataObj.pob;
          civilData.dob = dataObj.dob;
          civilData.sex = dataObj.sex;
          civilData.martialStatus = dataObj.martialStatus;
          return civilData;
        });
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onEdit(id: number) {
    location.href = `civilextractform?id=${id}`;
    
  }

  onDelete(id: number) {
    let dialogRef = this.dialog.open(DialogComponent, {data: { content: "Are you sure you want to DELETE the draft?"}});
  dialogRef.afterClosed().subscribe(result => { 
    if(result == 'true') {
      this.formSubmissionService.deleteExtract(id).subscribe(
        (response: void) => {
          this.snackBar.open("Your draft has been deleted", "Dismiss", {duration: 2000});
          this.getHistory();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      )
    }
  });
  }

  
}
