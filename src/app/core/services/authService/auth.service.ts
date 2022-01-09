import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import { Router } from '@angular/router';
import {Observable, of, Subscription} from 'rxjs';
import { map } from 'rxjs/operators';
import {differenceBetweenEntryAndNowTime, startOutTimeActivity} from "../../../shared/constants";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public googleProvider = new firebase.auth.GoogleAuthProvider();
  public displaySignInOrOn = false;
  public currentUserUIDForReq!: string;
  public subscriptionForStartActivity!: Subscription;
  public subscriptionForDifferenceActivity!: Subscription;
  constructor(public firebaseAuth: AngularFireAuth, public router: Router) {}

  signup(email: string, password: string): Promise<void> {
    return this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate(['search']);
      });
  }

  signin(email: string, password: string): Promise<void> {
    return this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate(['search']);
      });
  }

  signGoogle(): Promise<void> {
    return this.authLogin(this.googleProvider);
  }

  authLogin(provider: any): Promise<void> {
    return this.firebaseAuth.signInWithPopup(provider).then(() => {
      this.router.navigate(['search']);
    });
  }

  logout(): void {
    this.firebaseAuth
      .signOut()
      .then(() => {
        this.router.navigate(['']);
      })
      .then(() => {
        this.subscriptionForStartActivity.unsubscribe();
        this.subscriptionForDifferenceActivity.unsubscribe();
        this.currentUserUIDForReq='';
      });
  }

  checkAuth(): Observable<firebase.User | null> {
    return this.firebaseAuth.authState.pipe(
      map((req) => {
        if(req)
        {
          this.currentUserUIDForReq = req.uid?.replace('.', '_') || '';
          this.subscriptionForStartActivity = startOutTimeActivity().subscribe();
          this.subscriptionForDifferenceActivity =
            differenceBetweenEntryAndNowTime().subscribe(() => {
              let entryTime = new Date().getTime();
              if (entryTime - JSON.parse(<string>localStorage.getItem('userActivity')) > 60000) {
                this.logout();
              }
            });
        }
        return req;
      })
    );
  }
}
