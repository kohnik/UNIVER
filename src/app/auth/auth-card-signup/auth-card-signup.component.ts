import { Component} from '@angular/core';

import { patternForEmail, patternForPassword } from '../../shared/constants';
import { AuthService } from '../../core/services/authService/auth.service';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-auth-card-signup',
  templateUrl: './auth-card-signup.component.html',
  styleUrls: ['./auth-card-signup.component.scss'],
})
export class AuthCardSignupComponent{
  myForm: FormGroup = new FormGroup({
    userPassword: new FormControl(),
    userEmail: new FormControl(),
  });
  mistakeValidEmail = false;
  mistakeValidPass = false;
  authEror = '';

  constructor(public authService: AuthService) {}

  onSignup(): void {
    this.chooseValueMistakeEmail()
    this.chooseValueMistakePass()
    if (
      patternForEmail.test(this.myForm.value.userEmail) &&
      patternForPassword.test(this.myForm.value.userPassword)
    ) {
      this.authService
        .signup(this.myForm.value.userEmail, this.myForm.value.userPassword)
        .then(() => {})
        .catch((error) => {
          this.authEror = error.message;
        });
    } else {
      this.mistakeValidEmail = true;
      this.mistakeValidPass = true;
    }
  }


  chooseValueMistakeEmail(): void {
    this.mistakeValidEmail = false;
    this.authEror = '';
  }

  chooseValueMistakePass(): void {
    this.mistakeValidPass = false;
    this.authEror = '';
  }

}
