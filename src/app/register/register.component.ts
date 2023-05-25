import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  constructor(private service: UserService, public snackBar: MatSnackBar, private router: Router){}

  ngOnInit(): void {
   
  }

  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;


  public registration(user: User) {
    const existingPasswordMessage = document.querySelector('.registerFailure');
    const existingEmailMessage = document.querySelector('.emailExists');
    if(this.confirmPassword !== this.password) {
      if( !existingPasswordMessage) {
        const p = document.createElement('p');
        p.innerHTML = 'Passwords do not match';
        p.classList.add('registerFailure');
        document.querySelector('.error-message').appendChild(p);
      }
      return;
    }
    if(existingPasswordMessage) {
      document.querySelector('.registerFailure').remove();
    }
    this.service.register(user).subscribe(
      (respone: User) => {
        console.log(respone);
        this.router.navigate(['login']).then((navigated: boolean) => {
          if(navigated) {
            this.snackBar.open("You have been successfully Refgistered. Please Login to Conitnue",
             "Dismiss", {duration: 4000});
          }
      });
      },
      (error: HttpErrorResponse) => {
        if(error.status === 401) {
          if(!existingEmailMessage) {
            const p = document.createElement('p');
            p.innerHTML = 'Email already exists';
            p.classList.add('emailExists');
            document.querySelector('.email-error').appendChild(p);
          }
        }else {
          alert("Server error, please try again later" + error.message);
        }
      }
    );
  }

}
