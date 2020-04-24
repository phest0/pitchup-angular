import { Component, OnInit, OnDestroy } from '@angular/core';
import { PitchListService } from './services/pitchList.service';
import { AuthService } from './services/auth.service';
import { Observable, Subscription } from 'rxjs';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  // 1 variables
  authStatus: boolean;
  seconds: number;
  counterSubscription: Subscription;
  // promise for Date

  // 2.constructeur
  constructor(private pitchListService: PitchListService, private authService: AuthService) {

  }

  // 3.méthodes

  getAuthStatus() {
    this.authStatus = this.authService.isAuth;
    return this.authStatus;
  }

  // 4. ngOninit
  ngOnInit() {
    const counter = Observable.interval(1000);
    this.counterSubscription = counter.subscribe(
      // en cas de succès
      (value) => {
        this.seconds = value;
      },
      (error) => {
        console.log('error: ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    )
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}
