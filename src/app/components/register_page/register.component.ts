import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
//import * as Http from "http";

@Component({
  templateUrl: 'register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
/*  constructor(private http: Http, private router: Router) { }

  userAddString: string = "User registered successfully";

  userObj: object = {};

  addUser(user) {
    this.userObj = {
      "uname" : user.name,
      "password" : user.password,
    }
  }
*/
}
