import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private cookie: CookieService, public dialog: MatDialog){}

  logOut() {
    let dialogRef = this.dialog.open(DialogComponent, {data: { content: "Are you sure you want to Log out?"}});
    dialogRef.afterClosed().subscribe(result => { 
      if(result == 'true') {
        location.href = 'login';
        this.cookie.delete('token');
      }
    });
    
  }

  onFillEform(path: string) {
    location.href = path;
  }

  onUploadDocument(path: string) {
    location.href = path;
  }

  onViewHistory(path: string) {
    location.href = path;
  }

}
