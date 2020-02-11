import { Component, OnInit } from '@angular/core';

export class SalesTransaction {
  constructor(
    public invoiceID: number,
    public invoiceNo: string,
    public invoiceDate: Date,
    public doNo: string,
    public soNo: string,
    public paymentType: number,
    public expiredPayment: Date,
    public ppnType: number,
    public ppn: number,
    public total: number,
    public basic: number,
    public discount: number,
    public grandtotal: number,
    public customerID: number,
    public customerName: string,
    public customerAddress: string,
    public staffID: number,
    public staffName: string,
    public createdDate: Date,
    public createdUserID: number,
    public modifiedDate: Date,
    public modifiedUserID: number
  ){

  }
}

@Component({
  selector: 'app-sales-transaction',
  templateUrl: './sales-transaction.component.html',
  styleUrls: ['./sales-transaction.component.css']
})
export class SalesTransactionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
