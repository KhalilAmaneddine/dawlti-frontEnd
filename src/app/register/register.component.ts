import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  constructor(private service: UserService){}

  ngOnInit(): void {
   
  }

  firstname: string;
  lastname: string;
  email: string;
  password: string;


  public registration(user: User) {
    this.service.register(user).subscribe(
      (respone: User) => {
        console.log(respone);
        alert("You have been successfully registered, please login to continue");
        location.href = 'login';
      },
      (error: HttpErrorResponse) => {
        alert("Email already exists");
      }
    );
  }

}
