import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ProcessHttpmsgProvider} from '../process-httpmsg/process-httpmsg';
import {Leader} from '../../shared/leader';
import {Observable} from 'rxjs';
import {baseURL} from '../../shared/baseurl';

/*
  Generated class for the LeaderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LeaderProvider {

  constructor(public http: HttpClient, private processHTTPMsgService: ProcessHttpmsgProvider) {
    console.log('Hello LeaderProvider Provider');
  }

  getLeaders(): Observable<Leader[]> {
    return this.http.get<Leader[]>(baseURL + 'leaders')
      // .map(res => { return this.processHTTPMsgService.extractData(res); })
      .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }

  getLeader(id: number): Observable<Leader> {
    return  this.http.get<Leader>(baseURL + 'leaders/'+ id)
      // .map(res => { return this.processHTTPMsgService.extractData(res); })
      .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.http.get<Leader[]>(baseURL + 'leaders?featured=true')
      .map(res => res[0])
      .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }
}
