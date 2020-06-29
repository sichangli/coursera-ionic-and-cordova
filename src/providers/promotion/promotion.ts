import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Promotion} from '../../shared/promotion';
import {ProcessHttpmsgProvider} from '../process-httpmsg/process-httpmsg';
import {Observable} from 'rxjs';
import {baseURL} from '../../shared/baseurl';

/*
  Generated class for the PromotionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PromotionProvider {

  constructor(public http: HttpClient, private processHTTPMsgService: ProcessHttpmsgProvider) {
    console.log('Hello PromotionProvider Provider');
  }

  getPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(baseURL + 'promotions')
      // .map(res => { return this.processHTTPMsgService.extractData(res); })
      .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }

  getPromotion(id: number): Observable<Promotion> {
    return  this.http.get<Promotion>(baseURL + 'promotions/'+ id)
      // .map(res => { return this.processHTTPMsgService.extractData(res); })
      .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.http.get<Promotion[]>(baseURL + 'promotions?featured=true')
      .map(res => res[0])
      .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }
}
