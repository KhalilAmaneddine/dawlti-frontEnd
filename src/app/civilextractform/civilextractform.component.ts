import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormSubmission } from '../formSubmission';
import { FormSubmissionsService } from '../form-submissions.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Form } from '../form';
import { User } from '../user';
import { CivilExtractData } from '../civil-extract-data';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-civilextractform',
  templateUrl: './civilextractform.component.html',
  styleUrls: ['./civilextractform.component.css']
})
export class CivilextractformComponent implements OnInit{

  constructor(private formSubmissionService: FormSubmissionsService, public dialog: MatDialog,
    public snackBar: MatSnackBar, private router: Router, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
     const urlParams = new URLSearchParams(window.location.search);
     this.id = parseInt(urlParams.get('id'));
     this.getSavedData();
     
  }
  id: number; 
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

  

 public generateDistricts(change: number) {
  if(change == 1) {
    this.district = '';
  }
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
  let dialogRef = this.dialog.open(DialogComponent, {data: { content: "Are you sure you want to CLEAR the form?"}});
  dialogRef.afterClosed().subscribe(result => { 
    if(result == 'true') {
      form.reset();
      this.snackBar.open("Form Resetted", "Dismiss", {duration: 2000});
    }
  });
  
 }

 onExit() {
  location.href = 'Home';
 }

 onSubmit(form: NgForm) {
  let dialogRef = this.dialog.open(DialogComponent, {data: { content: "Are you sure you want to SUBMIT the form?"}});
  dialogRef.afterClosed().subscribe(result => { 
    if(result == 'true') {
      const formDataJsonString = JSON.stringify(form.value);
       this.civilExtract = new FormSubmission(this.id, formDataJsonString, 'SUBMITTED', new Form(1, 'Civil Extract'), 
      new User());
      this.formSubmissionService.submitExtract(this.civilExtract).subscribe(
        (response: FormSubmission) => {
          console.log(response);
          this.router.navigate(['Home']).then((navigated: boolean) => {
            if(navigated) {
              this.snackBar.open("You Civil Extract has been submitted", "Dismiss", {duration: 2000});
            }
        });
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
        }
      });
  
 }

 onSave(form: NgForm) {
  
  let dialogRef = this.dialog.open(DialogComponent, {data: { content: "Are you sure you want to SAVE the form?"}});
  dialogRef.afterClosed().subscribe(result => {
    if(result == 'true') {
      const formDataJsonString = JSON.stringify(form.value);
      this.civilExtract = new FormSubmission(this.id, formDataJsonString, 'PENDING', new Form(1, 'Civil Extract'), 
      new User());
      this.formSubmissionService.saveExtract(this.civilExtract).subscribe(
        (response: FormSubmission) => {
          console.log(response);
          this.snackBar.open("You Civil Extract has been saved", "Dismiss", {duration: 2000});
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
    
  })
  
}


 getSavedData() {
  this.formSubmissionService.getCivilExtractData(this.id).subscribe(
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
      this.generateDistricts(0);    
      
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

