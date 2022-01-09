import { Component} from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { patternForEmail, patternForPassword } from '../../shared/constants';
import { AuthService } from '../../core/services/authService/auth.service';

@Component({
  selector: 'app-auth-card-signin',
  templateUrl: './auth-card-signin.component.html',
  styleUrls: ['./auth-card-signin.component.scss'],
})
export class AuthCardSigninComponent {
  myForm: FormGroup = new FormGroup({
    userPassword: new FormControl(),
    userEmail: new FormControl(),
  });
  authEror = '';
  mistakeValidEmail = false;
  mistakeValidPass = false;

  constructor(public authService: AuthService) {}

  onSignip(): void {
    this.chooseValueMistakeEmail()
    this.chooseValueMistakePass()
    if (
      patternForEmail.test(this.myForm.value.userEmail) &&
      patternForPassword.test(this.myForm.value.userPassword)
    ) {
      this.authService
        .signin(this.myForm.value.userEmail, this.myForm.value.userPassword)
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
