import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormSubmissionsService } from '../form-submissions.service';
import { CivilDocument } from '../civil-document';
import { Form } from '../form';
import { User } from '../user';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-civilextractdocument',
  templateUrl: './civilextractdocument.component.html',
  styleUrls: ['./civilextractdocument.component.css']
})
export class CivilextractdocumentComponent {

  constructor(private service: FormSubmissionsService) {}

  onSubmit(form: NgForm) {
   
  }
}
