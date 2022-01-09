import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap,
} from 'rxjs/operators';
import { FlickrService } from '../../core/services/flickrService/flickr.service';
import {
  DataForBookmarkPhoto,
  FlickrPhoto,
  FlickrPhotos,
} from '../../shared/interface';
import { BookmarkDataService } from '../../core/services/bookmarkDatabaseService/bookmark-data.service';
import { AuthService } from '../../core/services/authService/auth.service';

@Component({
  selector: 'app-search-photo',
  templateUrl: './search-photos.component.html',
  styleUrls: ['./search-photos.component.scss'],
})
export class SearchPhotosComponent implements OnInit {
  reactiveSearchForm: FormGroup;
  responceFlickr!: FlickrPhotos;
  receivedImages!: FlickrPhoto[];
  toDispalyImageStyle!: string;
  constructor(
    private formBuilder: FormBuilder,
    public photoService: FlickrService,
    public bookmarkService: BookmarkDataService,
    public authService: AuthService
  ) {
    this.reactiveSearchForm = this.formBuilder.group({
      inputSearch: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.reactiveSearchForm
      .get('inputSearch')
      ?.valueChanges.pipe(
        filter((req) => req.length > 1),
        distinctUntilChanged(),
        debounceTime(500),
        switchMap((req) => {
          this.photoService.page = 0;
          return this.photoService.getPhoto(req);
        })
      )
      .subscribe((data) => {
        this.responceFlickr = data.photos;
        this.receivedImages = data.photos.photo;
      });
  }

  onScroll(): void {
    this.photoService
      .getPhoto(this.reactiveSearchForm.value.inputSearch)
      .subscribe((data) => {
        this.responceFlickr = data.photos;
        this.receivedImages = this.receivedImages.concat(data.photos.photo);
      });
  }

  addToBookmark(photo: FlickrPhoto): void {
    let dataForBookmarkPhotos: DataForBookmarkPhoto;
    dataForBookmarkPhotos = {
      server: photo.server,
      secret: photo.secret,
      id: photo.id,
      email: this.authService.currentUserUIDForReq,
      idImageForDatabase: '',
    };
    this.bookmarkService
      .addImage(dataForBookmarkPhotos)
      .subscribe(() => (photo.inBookmark = true));
  }
}
