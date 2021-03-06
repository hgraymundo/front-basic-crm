import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor( private profile: ProfileService ) {
   }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.profile.getProfile().subscribe( data => {
      console.log(JSON.stringify(data));
    })
  }

}
