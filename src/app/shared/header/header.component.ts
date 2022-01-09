import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/authService/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  changeLogin(): void {
    this.authService.displaySignInOrOn = !this.authService.displaySignInOrOn;
  }

  logout(): void {
    this.authService.logout();
  }
}
