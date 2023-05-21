import { Component, OnInit } from '@angular/core';
import { FormSubmissionsService } from '../form-submissions.service';
import { CivilExtractData } from '../civil-extract-data';
import { HttpErrorResponse } from '@angular/common/http';
import { FormSubmission } from '../formSubmission';
import { Router } from '@angular/router';

@Component({
  selector: 'app-histroy-civil',
  templateUrl: './histroy-civil.component.html',
  styleUrls: ['./histroy-civil.component.css']
})
export class HistroyCivilComponent implements OnInit{
i: any;

  constructor(private service: FormSubmissionsService, private router: Router){}

  ngOnInit(): void {
    this.getHistory();
  }

  civilExtractData: CivilExtractData[];

  data: string[] = [];

  civilExtracts: FormSubmission[];
  
  getHistory() {

    this.service.getHistory(1).subscribe(
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

  
}
