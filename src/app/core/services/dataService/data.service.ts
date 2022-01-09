import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  DataForCharts, Extremum,
} from '../../../shared/interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData(startDate: number, endDate: number, region: string): Observable<DataForCharts> {
    const paramsForImageReq = `localhost:8080/api/v1/registrations?before=${startDate}&after=${endDate}&region=${region}`;
    return this.http.get<DataForCharts>(paramsForImageReq)
  }

  getExtremum(startDate: number, endDate: number): Observable<Extremum>  {
    const paramsForImageReq = `localhost:8080/api/v1/registrations/extremum?before=2022-01-03T15:41:17&after=2022-01-08T15:41:17`;
    return this.http.get<Extremum>(paramsForImageReq)
  }

  // getTags(firstReq: FleckrResponse): Observable<FleckrResponse> {
  //   let arrayWithLinksForTagsReq;
  //   arrayWithLinksForTagsReq = firstReq.photos.photo.map(
  //     (itemPhoto: FlickrPhoto) => {
  //       let paramsForTagReq = `api_key=${environment.flickr.key}&photo_id=${itemPhoto.id}&format=json&nojsoncallback=1`;
  //       return this.http.get<TagsResponce>(urlForFlckrGetTagsListPhoto + paramsForTagReq);
  //     }
  //   );
  //   return forkJoin(arrayWithLinksForTagsReq).pipe(
  //     map((tag: TagsResponce[]) => {
  //       firstReq.photos.photo = firstReq.photos.photo.map(
  //         (itemPhoto: FlickrPhoto, index) => {
  //           return { ...itemPhoto, ...tag[index].photo.tags }
  //         }
  //       );
  //       return firstReq;
  //     })
  //   )
  // }
}
