import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isAuthenticate: boolean = false;
  role: String;
  isAdmin: boolean = false;
  isTeacher: boolean = false;

  constructor( private auth: AuthService ) {
       
  }

  ngOnInit() {
    this.getRole();
  }

  getRole() {
    if(this.auth.isAuthenticated()) {
      this.role = this.auth.getRole();
      if(this.role == 'Admin') {
        this.isAdmin = true;
      }
      if( this.role = 'Teacher') {
        this.isTeacher = true;
      }
    }
  }

}
