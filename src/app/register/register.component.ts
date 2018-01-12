import { Component, OnInit, Output, EventEmitter, trigger, style, transition, animate, group } from '@angular/core';
import { ProfileService } from '../profile-services.service';
//import { NotificationService } from 'ng2-notify-popup';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
 // providers: [NotificationService]
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
  options = {
    position: ["bottom", "left"],
    timeOut: 5000,
    lastOnBottom: true
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
       // alert('User details Saved for:  ' + data.name);
       // window.location.reload();
        
      //  this.notification.show('success' + data.name, { position:'top', duration:'2000', type: 'success' });
        
      },
      error => {
        console.log(JSON.stringify(error.json()));
      })
  }


}
