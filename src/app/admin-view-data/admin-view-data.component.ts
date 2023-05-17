import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { FormSubmission } from '../formSubmission';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-admin-view-data',
  templateUrl: './admin-view-data.component.html',
  styleUrls: ['./admin-view-data.component.css']
})
export class AdminViewDataComponent implements OnInit{
  constructor(private adminService: AdminServiceService){}

  
  ngOnInit(): void {
    this.getData();
  }

  formSubmissions: FormSubmission[];
  getData() {
    this.adminService.getForms().subscribe(
      (response: FormSubmission[]) => {
        this.formSubmissions = response;
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
