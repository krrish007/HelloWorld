import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProfileService {

  constructor(private http: Http) {

  }

  getUser() {
    return this.http.get(`http://localhost:3000/api`)
      .map(result => result.json());

  }
  getUsers() {
    return this.http.get(`http://localhost:3000/api/user`)
      .map(results => { return results.json() })

  }

  saveUser(user) {
    var headers = new Headers({
      'Content-Type': 'application/json'
    });
    console.log(JSON.stringify(user))

    return this.http.post(`http://localhost:3000/api/addUser`, JSON.stringify(user), { headers: headers })
    .map(data=>{return data.json()});
  }

  deleteUser(user) {
    return Observable.forkJoin(
      this.http.delete(`http://localhost:3000/api/deleteUser/` + user[0]),
      this.http.get(`http://localhost:3000/api/user`).map(results => { return results.json() })
    );
  }

  searchUser(searchkey){
    
    return this.http.get(`http://localhost:3000/api/searchUser`, searchkey)
    .map(data=>{return data.json()});
  }

}
