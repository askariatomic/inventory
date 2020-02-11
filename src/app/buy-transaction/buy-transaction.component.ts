import { Component, OnInit } from '@angular/core';

export class BuyTransaction {
  constructor(
    public invoiceID: number,
    public invoiceNo: string,
    public invoiceDate: Date,
    public bbmNo: string,
    public spbNo: string,
    public paymentType: number,
    public expiredPayment: Date,
    public ppnType: number,
    public ppn: number,
    public total: number,
    public basic: number,
    public discount: number,
    public grandtotal: number,
    public supplierID: number,
    public supplierName: string,
    public supplierAddress: string,
    public staffID: number,
    public staffName: string,
    public createdDate: Date,
    public createdUserID: string,
    public modifiedDate: Date,
    public modifiedUserID: string
  ){

  }
}

@Component({
  selector: 'app-buy-transaction',
  templateUrl: './buy-transaction.component.html',
  styleUrls: ['./buy-transaction.component.css']
})
export class BuyTransactionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
