///<reference path="../../../shared/core/base-api.ts"/>
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operator/map';

import {Bill} from '../../../shared/models/bill.model';
import {BaseApi} from '../../../shared/core/base-api';


@Injectable()

export class BillService extends BaseApi {

  constructor (public http: HttpClient) {
    super(http);
  }

  getBill(): Observable<Bill> {
    return this.get('bill');
  }

  getCurrency(): Observable<any> {
    return this.get('currency');
  }
}
