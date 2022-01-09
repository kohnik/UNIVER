import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss'],
})
export class AsideMenuComponent implements OnInit {
  currentRoute!: any;
  styleForAsideButton!: string;

  constructor(private router: Router, public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.styleForAsideButton =
      this.router.url === '/bookmark' ? 'SavedPhoto' : 'Search';
  }

  changeStyleThemeForButton(): void {
    this.styleForAsideButton =
      this.router.url === '/bookmark' ? 'Search' : 'SavedPhoto'
  }
}

