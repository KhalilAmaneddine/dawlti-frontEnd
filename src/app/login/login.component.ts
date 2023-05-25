import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from 'jwt-decode';
import { JwtBody } from '../jwt-body';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string;
  password: string;

  constructor(private service: UserService, private cookieService: CookieService){}

  

  public login() {
    this.service.login(this.email, this.password).subscribe(
      (response: string) => {
        console.log(response);
        this.cookieService.set('token', response);
        const token = jwt_decode<JwtBody>(response);
        if(token.authorities == 'ROLE_USER')
        location.href = 'Home';
        else location.href = 'adminHome'
      },
      (error: HttpErrorResponse) => {
        if(error.status === 401) {
          const existingMessage = document.querySelector('.loginFailure');
          if(!existingMessage) {
            const p = document.createElement('p');
            p.innerHTML = 'Wrong Email or Password...';
            p.classList.add('loginFailure');
            document.querySelector('.error-message').appendChild(p);
          }
        }
        else {
          alert("Server error. Please try again later" + error.message);
        }
      }
  );
  }

 
}
