import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile-services.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  users;
  deleteUsers = [];
  searchKey;
  search;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.getMyData();
    // this.profileService.getUsers().subscribe(
    //   results => { this.users = results; console.log(this.users) }
    // )
  }

  getUsers() {
    alert('user app')
    this.profileService.getUsers().subscribe(
      results => { this.users = results; console.log(this.users) }
    )
  }

  deleteClick(event) {
    console.log(event.target);
    alert('In target:' + event.target.value)
  }

  selectUser(e, user, index) {
    if (e.target.value) {
      this.deleteUsers.push(user._id);
    } else {
      this.deleteUsers.splice(index, 1);
    }
  }

  deleteUser() {
    if (this.deleteUsers.length > 0) {
      this.profileService.deleteUser(this.deleteUsers).subscribe(data => {
        this.users = data[1];
        alert('all ok');
        this.deleteUsers = [];
      },
        error => {
          console.log(JSON.stringify(error.json()));
        });
    }
  }

  searchUser() {
    this.search = { key: this.searchKey };
    this.profileService.searchUser(this.search).subscribe(data => {
      console.log('search successfull');
    }, error => { })
  }

  getMyData() {
    this.profileService.myData().subscribe(
      data => {
     //   const [ data_changes , data_all ] = data;
    //console.log( "data_changes" , data1);
  //  console.log( "data_all" , data2);
        console.log(data)
      },
      error => {
        console.log(error)
        alert(error)
      });
  }

}
