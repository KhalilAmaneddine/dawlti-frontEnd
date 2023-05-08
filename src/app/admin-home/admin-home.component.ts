import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../user';
import { AdminServiceService } from '../admin-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UserDTO } from '../user-dto';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit{

  constructor(private cookie: CookieService, private adminService: AdminServiceService){}
  
  searchValue: string = '';
  ngOnInit(): void {
    this.getUsers(); 
  }
  
  logOut() {
    location.href = 'login';
    this.cookie.delete('token');
  }
  users: UserDTO[];
  getUsers() {
    this.adminService.getUsers().subscribe(
        (response: UserDTO[]) => {
          this.users = response;
          console.log(response);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
    );
  }

  onDelete(email: string) {
    this.adminService.deleteUser(email).subscribe(
      (response: void) => {
        alert("User deleted");
        this.getUsers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
