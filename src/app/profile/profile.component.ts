import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile-services.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [ProfileService]
})
export class ProfileComponent implements OnInit {
  user;
  message;
  constructor(private profileService: ProfileService) {

  }

  getData(event) {
    this.message = event;
    console.log(this.message);
  }

  ngOnInit() {
    this.profileService.getUser().subscribe(
      data => { this.user = data; console.log(this.user); }
    )
  }

  generateArray(obj) {
    return Object.keys(obj).map((key) => { return { key: key, value: obj[key] } });
  }
  
  getUserData() {
    this.profileService.getUser().subscribe(
      data => { this.user = data.profile; console.log(this.user); }
    )
  }
}
