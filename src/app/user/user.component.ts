import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile-services.service'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  users;

  constructor(private profileService:ProfileService) { }

  ngOnInit() {
    alert('user app')
    this.profileService.getUsers().subscribe(
      results => { this.users = results; console.log(this.users) }
    )
  }
  getUsers();
  getUsers() {
    alert('user app')
    this.profileService.getUsers().subscribe(
      results => { this.users = results; console.log(this.users) }
    )

  }

}
