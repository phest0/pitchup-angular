import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Initialise le statut de connexion
  isAuth = false;

  constructor (){}

  // Simule la connexion et le temps de réponse du serveur en faisait passer isAuth à True en 2 secondes
  signIn() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.isAuth = true;
            resolve(true);
          }, 2000
        );
      }
    );
  }
  // Simule la déconnexion en faisait passer isAuth à False
  signOut() {
    this.isAuth = false;
  }
}
