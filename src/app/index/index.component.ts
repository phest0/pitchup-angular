import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
// variables
  authStatus:boolean;

  constructor(private authService: AuthService, private router:Router) { }

  onSignIn() {
    this.authService.signIn().then(
      () => {
        console.log('Sign in Successfull!');
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['pitches']);
      }
    );
  }

  onSignOut(){
    this.authService.signOut();
    console.log('Sign out is Successfull!');
    this.authStatus = this.authService.isAuth;
  }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

}
