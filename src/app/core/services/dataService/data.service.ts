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
    const paramsForImageReq = `localhost:8080/api/v1/registrations/extremum?before=${startDate}&after=${endDate}`;
    return this.http.get<Extremum>(paramsForImageReq)
  }
}
