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
  displayPasswordsError: boolean = false;
  displayEmailExistsError: boolean = false;

  public registration(user: User) {
    this.displayPasswordsError = false;
    this.displayEmailExistsError = false;
    if(this.confirmPassword !== this.password) {
      this.displayPasswordsError = true;
      return;  
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
          this.displayEmailExistsError = true;
        }else {
          alert("Server error, please try again later" + error.message);
        }
      }
    );
  }

}
