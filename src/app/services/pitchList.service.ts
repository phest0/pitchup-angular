import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

// pitchList service
export class PitchListService {

  // private pitches: any = [
  //   {
  //     id: 1,
  //     title: "Pitch title 1",
  //     category: "category 1",
  //     score: 1,
  //     content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  //   },
  //   {
  //     id: 2,
  //     title: "Pitch title 2",
  //     category: "category 2",
  //     score: 2,
  //     content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  //   },
  //   {
  //     id: 3,
  //     title: "Pitch title 3",
  //     category: "category 3",
  //     score: 3,
  //     content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  //   },
  //   {
  //     id: 4,
  //     title: "Pitch title 4",
  //     category: "category 3",
  //     score: 4,
  //     content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  //   },
  // ];

  private pitches: any[];

  pitchesSubject = new Subject<any[]>();

  constructor(private httpClient: HttpClient) { }

  emitPitchesSubject() {
    //.next est une methode qui met à jour l'observable
    this.pitchesSubject.next(this.pitches.slice());
  }

  scoreReset() {
    for (let pitch of this.pitches) {
      pitch.score = 0;
    }
    this.emitPitchesSubject();
  }

  resetOne(i: number) {
    this.pitches[i].score = 0;
    this.emitPitchesSubject();
  }

  voteUp(i: number) {
    this.pitches[i].score++;
    this.emitPitchesSubject();
  }

  voteDown(i: number) {
    this.pitches[i].score--;
    this.emitPitchesSubject();
  }

  getPitchById(id: number) {
    const pitch = this.pitches.find(
      (s) => {
        return s.id === id;
      }
    );
    return pitch;
  }

  //Récupère les pitches sur le serveur
  getPitchesFromServer() {
    // correspond à XMLHttpRequest ou à fetch en JS natif
    this.httpClient
      // Récupère les données
      .get<any[]>('https://api.npoint.io/a64f5167758424a48ace')
      // Souscrit à l'observable
      .subscribe(
        (response) => {
          // Reçoit une réponse : liste de pitch
          this.pitches = response;
          console.log("It's coming!" + response);
          // Envoie l'information au sujet
          this.emitPitchesSubject();
        },
        (error) => {
          console.log('Error! : ' + error);
        }
      );
  }
}
