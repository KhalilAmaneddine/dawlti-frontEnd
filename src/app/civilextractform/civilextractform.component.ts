import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormSubmission } from '../formSubmission';
import { FormSubmissionsService } from '../form-submissions.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Form } from '../form';
import { User } from '../user';
import { CivilExtractData } from '../civil-extract-data';

@Component({
  selector: 'app-civilextractform',
  templateUrl: './civilextractform.component.html',
  styleUrls: ['./civilextractform.component.css']
})
export class CivilextractformComponent implements OnInit{

  constructor(private formSubmissionService: FormSubmissionsService){}

  ngOnInit(): void {
     this.getSavedData();
  }

  governerate: string = '';
  district: string;
  fname: string;
  surname: string;
  fathersname: string;
  mothersname: string;
  pob: string;
  dob: string;
  sex: string;
  martialStatus: string;
  
  civilExtract: FormSubmission;
  districts: string[] = [];

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

      default: 
      this.districts = [];
      break;
    }
 }

 onCancel(form: NgForm) {
  form.reset();
  this.formSubmissionService.deleteExtract(1).subscribe(
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

 onSubmit(form: NgForm) {
  const formDataJsonString = JSON.stringify(form.value);
  this.civilExtract = new FormSubmission(formDataJsonString, 'SUBMITTED', new Form(), 
  new User());
  this.formSubmissionService.submitExtract(this.civilExtract,1).subscribe(
    (response: FormSubmission) => {
      console.log(response);
      alert("Your Civil Extract has been submitted.")
      location.href = 'Home';
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
 }

 onSave(form: NgForm) {
    const formDataJsonString = JSON.stringify(form.value);
    this.civilExtract = new FormSubmission(formDataJsonString, 'PENDING', new Form(), 
  new User());
  this.formSubmissionService.saveExtract(this.civilExtract, 1).subscribe(
    (response: FormSubmission) => {
      console.log(response);
      alert('Your Civil Extract has been saved');
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}


 getSavedData() {
  this.formSubmissionService.getCivilExtractData(1).subscribe(
    (response: CivilExtractData) => {
      this.governerate = response.governerate;
      this.district = response.district;
      this.fname = response.fname;
      this.surname = response.surname;
      this.fathersname = response.fathersname;
      this.mothersname = response.mothersname;
      this.pob = response.pob;
      this.dob =  response.dob;
      this.sex = response.sex;
      this.martialStatus = response.martialStatus;
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
  this.formSubmissionService.formPrinted('Civil Extract').subscribe(
    (response: void) => {
      console.log(response);
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  )
}

 
  
}

