import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProfileService } from '../profile-services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  users;
  @Output()
  change = new EventEmitter();
  user = {
    name: '',
    designation: '',
    location: '',
    company: ''
  }
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getUsers().subscribe(
      results => { this.users = results; console.log(this.users) }
    )
  }

  changeData() {
    this.change.emit('data received');
  }
  getUsers() {
    alert('user app')
    this.profileService.getUsers().subscribe(
      results => { this.users = results; console.log(this.users) }
    )
  }
  /**
   * 
   * @param user 
   */
  saveUser(user) {
    this.profileService.saveUser(user).subscribe(
      data => {
        alert('User details Saved for:  ' + data.name);
        window.location.reload();
        /*
        var toast = this.notificationService.success('Item created!', 'Click to undo...', {
          timeOut: 3000,
          showProgressBar: true,
          pauseOnHover: true,
          clickToClose: true
        });
        */
      },
      error => {
        console.log(JSON.stringify(error.json()));
      })
  }


}
