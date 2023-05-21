import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';
import { DialogComponent } from './dialog/dialog.component';
import jwt_decode from 'jwt-decode';
import { JwtBody } from './jwt-body';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'test';

  constructor(private cookieService: CookieService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.onRouteChange();
    this.dispalyAdmin();
  }
  
  displayNav: boolean = false;
  displayAdminNav: boolean = false;


  onRouteChange() {
      if(this.cookieService.get('token')) {
        const decodedToken = jwt_decode<JwtBody>(this.cookieService.get('token'));
      if(decodedToken.authorities == 'ROLE_USER')    
        this.displayNav = true;
      } else {
        this.displayNav = false;
      }
  }

  logOut() {
    let dialogRef = this.dialog.open(DialogComponent, {data: { content: "Are you sure you want to Log out?"}});
    dialogRef.afterClosed().subscribe(result => { 
      if(result == 'true') {
        location.href = 'login';
        this.cookieService.delete('token');
      }
    });
    
  }

  dispalyAdmin() {
    if(this.cookieService.get('token')) {
      const decodedToken = jwt_decode<JwtBody>(this.cookieService.get('token'));
    if(decodedToken.authorities == 'ROLE_ADMIN')    
      this.displayAdminNav = true;
    } else {
      this.displayAdminNav = false;
    }
  }
}
