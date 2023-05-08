import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private cookie: CookieService){}

  logOut() {
    location.href = 'login';
    this.cookie.delete('token');
  }

}
