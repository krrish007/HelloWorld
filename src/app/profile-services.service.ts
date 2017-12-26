import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {

  constructor(private http: Http) {

  }

  getUser() {
    return this.http.get(`http://localhost:3000/api`)
      .map(result => result.json());

  }
  getUsers(){
    return this.http.get(`http://localhost:3000/api/users`)
    .map(results =>{return results.json()})
    
  }

}
