import { Component, OnInit } from '@angular/core';
import { FormSubmissionsService } from '../form-submissions.service';
import { JudicialExtractData } from '../judicial-extract-data';
import { HttpErrorResponse } from '@angular/common/http';
import { FormSubmission } from '../formSubmission';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-history-judicial',
  templateUrl: './history-judicial.component.html',
  styleUrls: ['./history-judicial.component.css']
})
export class HistoryJudicialComponent implements OnInit{

  constructor(private formSubmissionService: FormSubmissionsService, public dialog: MatDialog, public snackBar: MatSnackBar){}

  
  ngOnInit(): void {
    this.getHistory();
  }

  judicialExtractData: JudicialExtractData[];

  judicialExtracts: FormSubmission[];

  data: string[] = [];

  getHistory() {
    this.formSubmissionService.getHistory(2).subscribe(
      (response: FormSubmission[]) => {
          this.judicialExtracts = response;
          for(let i = 0; i < response.length; i++) {
            this.data[i] = response[i].formData;
          }
          this.judicialExtractData = this.data.map((formData: string) => {
          const dataObj = JSON.parse(formData);
          const judidicialData = new JudicialExtractData();
          judidicialData.governerate = dataObj.governerate;
          judidicialData.district = dataObj.district;
          judidicialData.fullName = dataObj.fullName;
          judidicialData.fathersname = dataObj.fathersname;
          judidicialData.mothersname = dataObj.mothersname;
          judidicialData.pob = dataObj.pob;
          judidicialData.dob = dataObj.dob;
          judidicialData.sex = dataObj.sex;
          judidicialData.convicted = dataObj.convicted;
          judidicialData.convictionType = dataObj.convictionType;

          return judidicialData;
        });
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onEdit(id: number) {
    location.href = `judicialextractform?id=${id}`;
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
