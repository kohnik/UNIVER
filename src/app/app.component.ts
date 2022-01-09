import {Component} from '@angular/core';

import {AuthService} from "./core/services/authService/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'elinext';

  constructor(   public authService: AuthService) {
  }
}
