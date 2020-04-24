import { Component, Input, OnInit } from '@angular/core';
import { PitchListService } from '../services/pitchList.service';

@Component({
  selector: 'app-pitch-single',
  templateUrl: './pitch-single.component.html',
  styleUrls: ['./pitch-single.component.css']
})
export class PitchSingleComponent implements OnInit {
  // 1.Variable
  @Input() lastUpdate:Date;
  @Input() isAuth:boolean;
  @Input() pitchTitle:string;
  // pitchTitle: string = "Pitch title from .ts";
  @Input() pitchCategory:string;
  @Input() pitchContent:string;
  // pitchScore: number = 0;
  @Input() pitchScore:number;
  @Input() index:number;
  @Input() pitchId:number;
  // 2.constructeur

constructor(private pitchListService:PitchListService) {

}

  // 3.Méthodes
  getPitchTitle(){
    return this.pitchTitle;
  }

  onResetOne() {
      this.pitchListService.resetOne(this.index);
    }

  OnVoteUp() {
    this.pitchListService.voteUp(this.index);
  }

  OnVoteDown() {
    this.pitchListService.voteDown(this.index);
  }

  getBgColor() {
    if (this.pitchCategory === "category 1") {
      return "#CCA43B";
    } else if (this.pitchCategory === "category 2") {
      return "#F1AB86";
    } else if (this.pitchCategory === "category 3") {
      return "#B7F0AD";
    }
  }

  getColor() {
    if (this.pitchScore < 0) {
      return "#BD1E1E";
    }
    else {
      return "inherit";
    }
  }
  // 4.ngOnInit
  ngOnInit() {
  }

}
