import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { setTimeout } from 'timers';

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

  myData() {
    var user = [1, 2, 3, 4];
    var comp = [6, 7, 8]
    var myObserver = new Observable(observer => {
      setTimeout(function () {
        for (var i = 0; i < user.length; i++) {
          observer.next(user[i]);

        }
       // observer.complete();

      }, 1000);

    });
    var myObserver1 = new Observable(observer => {
      setTimeout(function () {
        for (var i = 0; i < comp.length; i++) {
          observer.next(comp[i]);
        }

        // observer.next(comp)
      }, 1000)

      // observer.complete();
    });
    //  user.push(5);
    //var newObs = Observable.merge(myObserver, myObserver1)
    // myObserver.merge(myObserver1);

    //first emit observable 1 then second
   // var newObs = myObserver.concat(myObserver1)
    //forkJoin(run stream parallely)
    // var newObs = Observable.forkJoin(myObserver, myObserver1);
    // var newObs=  myObserver.flatMap(myObserver1)
      var newObs=  Observable.merge(myObserver, myObserver1)
    return newObs;
  }

  saveUser(user) {
    var headers = new Headers({
      'Content-Type': 'application/json'
    });
    console.log(JSON.stringify(user))

    return this.http.post(`http://localhost:3000/api/addUser`, JSON.stringify(user), { headers: headers })
      .map(data => { return data.json() });
  }

  deleteUser(user) {
    return Observable.forkJoin(
      this.http.delete(`http://localhost:3000/api/deleteUser/` + user[0]),
      this.http.get(`http://localhost:3000/api/user`).map(results => { return results.json() })
    );
  }

  searchUser(searchkey) {
    return this.http.get(`http://localhost:3000/api/searchUser`, searchkey)
      .map(data => { return data.json() });
  }

}
