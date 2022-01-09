import { fromEvent, merge, timer } from 'rxjs';
import {auditTime, debounceTime, map} from 'rxjs/operators';
import {FlickrPhotos} from "./interface";

export const urlForFlckrSearchPhoto = `https://www.flickr.com/services/rest/?method=flickr.photos.search&`;
export const urlForFlckrGetTagsListPhoto = `https://www.flickr.com/services/rest/?method=flickr.tags.getListPhoto&`;
export const patternForEmail = /[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}/;
export const patternForPassword = /[0-9a-zA-Z]{6,}/;
export const urlForBookmarkDatabase =
  'https://elinext-cd314-default-rtdb.firebaseio.com/bookmarks/';



export const dataForBookmarkPhotosTEST = {
  server: 'string',
  secret: 'string',
  id: 'string',
  email: 'string',
  idImageForDatabase: 'string'
}

export const postImageTEST =
{
  name: 'string'

}

export const startOutTimeActivity = () => {

  const keyEvents = fromEvent(document, 'keydown');
  const scrollEvents = fromEvent(document, 'wheel', { capture: true });
  const mousemoveEvents = fromEvent(document, 'mousemove');
  const allEvents = merge(scrollEvents, mousemoveEvents, keyEvents);
  return allEvents.pipe(
    auditTime(1000),
    map((data) => {
      localStorage.setItem('userActivity',`${new Date().getTime()}`)
      return data
    }),

  );
};

export const differenceBetweenEntryAndNowTime = () => {
  return timer(0, 10000).pipe(auditTime(20000));
};

