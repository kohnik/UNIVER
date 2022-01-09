// import {inject, TestBed} from '@angular/core/testing';
//
// import { BookmarkDataService } from './bookmark-data.service';
// import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
// import {HttpClientModule} from "@angular/common/http";
// import {AuthService} from "../authService/auth.service";
// import {dataForBookmarkPhotosTEST,postImageTEST} from "../../../shared/constants";
//
// describe('BookmarkDataService', () => {
//   let service: BookmarkDataService;
//   let authStub: AuthService = jasmine.createSpyObj('AuthService', ['checkAuth']);
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule, HttpClientModule],
//       providers: [
//         HttpTestingController,
//         {
//           provide: AuthService,
//           useValue: authStub,
//         },
//
//       ],
//     });
//     service = TestBed.inject(BookmarkDataService);
//   });
//
//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
//
//   // it('should add image', () => {
//   //   service
//   //     .addImage( dataForBookmarkPhotosTEST)
//   //     .subscribe((postImage) => {
//   //       expect(postImage).toEqual(postImageTEST);
//   //     });
//   // });
//
//   // it('should add image', inject([BookmarkDataService,HttpTestingController], (service: BookmarkDataService, backend: HttpTestingController)=>
//   // {
//   //     service.addImage(dataForBookmarkPhotosTEST).subscribe(data=>
//   //     {
//   //       expect(data).toEqual(postImageTEST);
//   //     })
//   //   backend.expectOne({
//   //     method: 'POST',
//   //     url: ' user/1'
//   //   }).flush(postImageTEST)
//   // }))
// });
