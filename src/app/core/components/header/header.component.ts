import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { promise } from 'selenium-webdriver';

@Component({
  selector: 'ac-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogin: boolean;

  constructor(
    private ofAuth: AngularFireAuth,
    private router: Router,
    private authservice: AuthService
  ) { }

  ngOnInit(): void {
    this.ofAuth.onAuthStateChanged((user: firebase.User) => {
      this.isLogin = !!user;
    });
  }

  logout(): void {
    this.authservice.logout()
      .then(() => this.router.navigateByUrl('/login'));
  }

}
