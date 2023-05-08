import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormSubmission } from '../formSubmission';
import { Form } from '../form';
import { User } from '../user';
import { FormSubmissionsService } from '../form-submissions.service';
import { HttpErrorResponse } from '@angular/common/http';
import { JudicialExtractData } from '../judicial-extract-data';

@Component({
  selector: 'app-judicialextract',
  templateUrl: './judicialextract.component.html',
  styleUrls: ['./judicialextract.component.css']
})
export class JudicialextractComponent implements OnInit{

  constructor(private renderer: Renderer2, private formSubmissionService: FormSubmissionsService) {}

  ngOnInit(): void {
    this.getSavedData();
  }
  
  
  governerate: string = '';
  district: string;
  fullName: string;
  fathersname: string;
  mothersname: string;
  pob: string;
  dob: string;
  sex: string;
  convicted: string;
  convictionType: string = '';

  judicialExtract: FormSubmission;

  governerates: string[] = [
    'Akkar Governerate',
    'Baalbek-Hermel Governerate',
    'Beirut Governorate',
    'Beqaa Governorate',
    'Keserwan-Jbeil Governorate',
    'Mount Lebanon Governorate',
    'Nabatieh Governorate',
    'North Governorate',
    'South Governorate'
  ]


  districts: string[] = [];
 public generateDistricts() {
    switch(this.governerate) {
      case 'Akkar Governerate':
        this.districts = ['Akkar'];
        break;

      case 'Baalbek-Hermel Governerate':
        this.districts = ['Baalbak', 'Hermel',];
        break;  

      case 'Beirut Governorate':
        this.districts = ['Beirut'];
        break;

      case 'Beqaa Governorate':
        this.districts = ['Rashaya', 'Western Beqaa', 'Zahle'];
        break;
       
      case 'Keserwan-Jbeil Governorate':
        this.districts = ['Byblos', 'Keserwan'];
        break;  
      
      case 'Mount Lebanon Governorate':
        this.districts = ['Aley', 'Baabda', 'Chouf', 'Matn'];
        break;

      case 'Nabatieh Governorate':
        this.districts = ['Bint Jbeil', 'Hasbaya', 'Marjeyoun', 'Nabatieh'];
        break;

      case 'North Governorate':
        this.districts = ['Batroun', 'Bsharri', 'Koura', 'Miniyeh-Danniyeh District', 'Tripoli', 'Zgharta'];
        break;

      case 'South Governorate':
        this.districts = ['Sidon', 'Jezzine', 'Tyre'];
        break;
    }
 }

 
 
 onCancel(jForm: NgForm) {
    jForm.reset();
    this.formSubmissionService.deleteExtract(2).subscribe(
      (response: void) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  onExit() {
    location.href = 'Home';
   }

 onSave(form: NgForm) {
    const formDataJsonString = JSON.stringify(form.value);
    this.judicialExtract = new FormSubmission(formDataJsonString, 'PENDING', new Form(), 
  new User());
  this.formSubmissionService.saveExtract(this.judicialExtract,2).subscribe(
    (response: FormSubmission) => {
      console.log(response);
      alert('Your Judicial Extract has been saved');
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
 }

 onSubmit(form: NgForm) {
  const formDataJsonString = JSON.stringify(form.value);
  this.judicialExtract = new FormSubmission(formDataJsonString, 'SUBMITTED', new Form(), 
  new User());
  this.formSubmissionService.submitExtract(this.judicialExtract,2).subscribe(
    (response: FormSubmission) => {
      console.log(response);
      alert("Your Judicial Extract has been submitted.")
      location.href = 'Home';
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
 }
  
 getSavedData() {
  this.formSubmissionService.getJudicialExtractData(2).subscribe(
    (response: JudicialExtractData) => {
      this.governerate = response.governerate;
      this.district = response.district;
      this.fullName = response.fullName;
      this.fathersname = response.fathersname;
      this.mothersname = response.mothersname;
      this.pob = response.pob;
      this.dob =  response.dob;
      this.sex = response.sex;
      this.convicted = response.convicted;
      this.convictionType = response.convictionType;
      this.generateDistricts();    
      
    },
    (error: HttpErrorResponse) => {
      console.log(error.message);
    }
  )
} 

onPrint(form: NgForm) {
  if(form.invalid) {
    alert("Fill the fields with correct data");
    return;
  }
  window.print();
  this.formSubmissionService.formPrinted('Judicial').subscribe(
    (response: void) => {
      console.log(response);
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  )
}



}
