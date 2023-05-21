import { Component, OnInit } from '@angular/core';
import { FormSubmission } from '../formSubmission';
import { AdminServiceService } from '../admin-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CivilExtractData } from '../civil-extract-data';

@Component({
  selector: 'app-admin-view-civil',
  templateUrl: './admin-view-civil.component.html',
  styleUrls: ['./admin-view-civil.component.css']
})
export class AdminViewCivilComponent implements OnInit{

  

  constructor(private adminService: AdminServiceService){}

  ngOnInit(): void {
    this.getData();
  }

  civilExtracts: FormSubmission[];

  civilExtractData: CivilExtractData[];

  data: string[] = [];
  
  getData() {
    this.adminService.getForms(1).subscribe(
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
