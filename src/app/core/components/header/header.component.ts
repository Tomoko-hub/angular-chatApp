import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'ac-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogin: boolean;

  constructor(private ofAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.ofAuth.onAuthStateChanged((user: firebase.User) => {
      this.isLogin = !!user;
    });
  }

}
