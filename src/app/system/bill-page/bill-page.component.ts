import {Component, OnDestroy, OnInit} from '@angular/core';
import 'rxjs/add/observable/combineLatest';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';

import {BillService} from '../shared/services/bill.service';
import {Bill} from '../../shared/models/bill.model';

@Component({
  selector: 'pvv-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss']
})
export class BillPageComponent implements OnInit, OnDestroy {

  subscr1: Subscription;
  subscr2: Subscription;

  currency: any = 1;
  bill: Bill;

  isLoaded = false;

  constructor(private billService: BillService) {
  }

  ngOnInit() {
    this.subscr1 = Observable.combineLatest(
      // this.billService.getBill(),
      this.billService.getCurrency()
    ).subscribe((data: any) => {
      console.log(data);
      this.bill = data[0]['bill'];
      this.currency = data[0]['currency'];
      this.isLoaded = true;
    });
  }

  onRefresh() {
    this.isLoaded = false;
    this.subscr2 = this.billService.getCurrency()
      .subscribe((data: any) => {
        this.currency = data['currency'];
        this.isLoaded = true;
    });

  }

  ngOnDestroy() {
    if (this.subscr1) { this.subscr1.unsubscribe(); }
    if (this.subscr2) { this.subscr2.unsubscribe(); }
  }
}
