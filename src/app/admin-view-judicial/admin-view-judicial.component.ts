import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { JudicialExtractData } from '../judicial-extract-data';
import { FormSubmission } from '../formSubmission';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-admin-view-judicial',
  templateUrl: './admin-view-judicial.component.html',
  styleUrls: ['./admin-view-judicial.component.css']
})
export class AdminViewJudicialComponent implements OnInit{

  constructor(private adminService: AdminServiceService){}

  ngOnInit(): void {
    this.getData();
  }

  judicialExtractData: JudicialExtractData[];

  judicialExtracts: FormSubmission[];

  data: string[] = [];

  getData() {
    this.adminService.getForms(2).subscribe(
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
    )
  }

  onApprove(form: FormSubmission) {
    this.adminService.approveForm(form).subscribe(
      (response: string) => {
        alert(response);
        this.getData();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}
