import {Component, Input, OnInit} from '@angular/core';
import {Bill} from '../../../shared/models/bill.model';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'pvv-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss']
})
export class BillCardComponent implements OnInit {

  @Input () bill: Bill;
  @Input () currency: any;

  usd: number;
  eur: number;

  constructor() { }

  ngOnInit() {
    this.currency.forEach(obj => {
      if (obj.ccy === 'USD') {
        this.usd = this.bill.value / obj.sale;
      }
      if (obj.ccy === 'EUR') {
        this.eur = this.bill.value / obj.sale;
      }
    });
  }

}
