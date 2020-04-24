import { Component, OnInit, OnDestroy } from '@angular/core';
import { PitchListService } from '../services/pitchList.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pitch-list',
  templateUrl: './pitch-list.component.html',
  styleUrls: ['./pitch-list.component.css']
})
export class PitchListComponent implements OnInit, OnDestroy {
  // variables
  pitches: any[];
  pitchSubscription: Subscription;

  // constructor
  constructor(private pitchListService: PitchListService) {

  }
  // Promise for date
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      // Resolve
      () => {
        resolve(date);
      }, 1500
    );
  })
  onResetAll() {
    this.pitchListService.scoreReset();
  }
  ngOnInit() {
    this.pitchListService.getPitchesFromServer();
    // this.pitches = this.pitchListService.pitches;
    this.pitchSubscription = this.pitchListService.pitchesSubject.subscribe(
      (pitches: any[]) => {
        this.pitches = pitches;
      }
    );
  }
  ngOnDestroy() {
    this.pitchSubscription.unsubscribe();
  }

}
