// import { ComponentFixture, TestBed } from '@angular/core/testing';
//
// import { BookmarksComponent } from './bookmarks.component';
// import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
// import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
// import {AuthService} from "../../core/services/authService/auth.service";
// import {BookmarkDataService} from "../../core/services/bookmarkDatabaseService/bookmark-data.service";
//
// describe('BookmarksComponent', () => {
//   let component: BookmarksComponent;
//   let fixture: ComponentFixture<BookmarksComponent>;
//
//
//   const fakeAuthService: AuthService = jasmine.createSpyObj('AuthService', [
//     'checkAuth']);
//
//   const fakeBookmarkDataService: BookmarkDataService = jasmine.createSpyObj('BookmarkDataService', [
//     'getImages']);
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ BookmarksComponent ],
//       providers: [
//         HttpTestingController,
//         HttpClient,
//         HttpHandler,
//         {
//           provide: AuthService,
//           useValue: fakeAuthService,
//         },
//         {
//           provide: BookmarkDataService,
//           useValue: fakeBookmarkDataService,
//         },
//       ],
//     })
//     .compileComponents();
//   });
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(BookmarksComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
