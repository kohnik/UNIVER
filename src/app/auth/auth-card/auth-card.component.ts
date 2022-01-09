import { Component } from '@angular/core';
import { AuthService } from '../../core/services/authService/auth.service';

@Component({
  selector: 'app-auth-card',
  templateUrl: './auth-card.component.html',
  styleUrls: ['./auth-card.component.scss'],
})
export class AuthCardComponent {
  public errorStatus = false;
  public errorMessage = '';

  constructor(public authService: AuthService) {}

  onSignupWithGoogle(): void {
    this.authService.signGoogle().catch((data) => {
      this.errorStatus = true;
      this.errorMessage = data.message;
    });
  }
}
