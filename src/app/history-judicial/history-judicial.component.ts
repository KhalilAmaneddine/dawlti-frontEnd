import { Component, OnInit } from '@angular/core';
import { FormSubmissionsService } from '../form-submissions.service';
import { JudicialExtractData } from '../judicial-extract-data';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-history-judicial',
  templateUrl: './history-judicial.component.html',
  styleUrls: ['./history-judicial.component.css']
})
export class HistoryJudicialComponent implements OnInit{

  constructor(private service: FormSubmissionsService){}

  
  ngOnInit(): void {
    this.getHistory();
  }

  judicialExtractData: JudicialExtractData[];
  
  getHistory() {
    this.service.getHistory(2).subscribe(
      (response: string[]) => {
          this.judicialExtractData = response.map((formData: string) => {
          const dataObj = JSON.parse(formData);
          const civilData = new JudicialExtractData();
          civilData.governerate = dataObj.governerate;
          civilData.district = dataObj.district;
          civilData.fullName = dataObj.fullName;
          civilData.fathersname = dataObj.fathersname;
          civilData.mothersname = dataObj.mothersname;
          civilData.pob = dataObj.pob;
          civilData.dob = dataObj.dob;
          civilData.sex = dataObj.sex;
          civilData.convicted = dataObj.convicted;
          civilData.convictionType = dataObj.convictionType;

          return civilData;
        });
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onExit() {
    location.href = 'Home';
  }
}
