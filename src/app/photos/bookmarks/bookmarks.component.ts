import { Component, OnInit } from '@angular/core';
import { DataForBookmarkPhoto } from '../../shared/interface';
import { BookmarkDataService } from '../../core/services/bookmarkDatabaseService/bookmark-data.service';
import { AuthService } from '../../core/services/authService/auth.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss'],
})
export class BookmarksComponent implements OnInit {
  dataForBookmarkImages!: DataForBookmarkPhoto[];
  constructor(
    public bookmarkService: BookmarkDataService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.bookmarkService.getImages().subscribe((data) => {
      if (data) {
        this.dataForBookmarkImages = Object.values(data);
      }
    });
  }

  deleteImage(image: DataForBookmarkPhoto) {
    this.bookmarkService
      .deleteImage(image)
      .subscribe(
        (data) =>
          (this.dataForBookmarkImages = this.dataForBookmarkImages.filter(
            (item) => item.id !== image.id
          ))
      );
  }
}
