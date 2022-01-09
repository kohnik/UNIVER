import { Injectable } from '@angular/core';
import {BookmarkResponce, DataForBookmarkPhoto, FleckrResponse, PostImage} from '../../../shared/interface';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../authService/auth.service';
import { map } from 'rxjs/operators';
import { urlForBookmarkDatabase } from '../../../shared/constants';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class BookmarkDataService {
  constructor(private http: HttpClient, public authService: AuthService) {}

  addImage(dataForBookmarkPhotos: DataForBookmarkPhoto):Observable<PostImage>{
    return this.http.post<PostImage>(
      `${urlForBookmarkDatabase}${this.authService.currentUserUIDForReq}.json`,
      dataForBookmarkPhotos)
  }

  getImages():Observable<BookmarkResponce> {
    return this.http.get<BookmarkResponce>(
        `${urlForBookmarkDatabase}${this.authService.currentUserUIDForReq}.json`
      )
      .pipe(
        map((images) => {
          console.log(images)
          if(images)
          {
            // @ts-ignore
            Object.keys(images).forEach(key => (images[key].idImageForDatabase = key));
          }
          return images;
        })
      )
  }

  deleteImage(image: DataForBookmarkPhoto):Observable<PostImage> {
    return this.http.delete<PostImage>(
      `${urlForBookmarkDatabase}${this.authService.currentUserUIDForReq}/${image.idImageForDatabase}.json`
    )
  }
}
