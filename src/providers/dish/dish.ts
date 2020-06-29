import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ProcessHttpmsgProvider} from '../process-httpmsg/process-httpmsg';
import {Dish} from '../../shared/dish';
import {Observable} from 'rxjs';
import {baseURL} from '../../shared/baseurl';

/*
  Generated class for the DishProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DishProvider {

  constructor(public http: HttpClient, private processHTTPMsgService: ProcessHttpmsgProvider) {
    console.log('Hello DishProvider Provider');
  }

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(baseURL + 'dishes')
      // .map(res => { return this.processHTTPMsgService.extractData(res); })
      .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }

  getDish(id: number): Observable<Dish> {
    return  this.http.get<Dish>(baseURL + 'dishes/'+ id)
      // .map(res => { return this.processHTTPMsgService.extractData(res); })
      .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }

  getFeaturedDish(): Observable<Dish> {
    return this.http.get<Dish[]>(baseURL + 'dishes?featured=true')
      .map(res => res[0])
      .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }

}
