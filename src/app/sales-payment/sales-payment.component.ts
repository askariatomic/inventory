import { Component, OnInit } from '@angular/core';

export class SalesPayment {
  constructor(
    public paymentID: number,
    public paymentNo: string,
    public invoiceID: number,
    public invoiceNo: string,
    public soNo: string,
    public paymentDate: Date,
    public payType: string,
    public bankNo: string,
    public bankName: string,
    public bankAC: string,
    public effectiveDate: Date,
    public total: number,
    public customerID: number,
    public customerName: string,
    public customerAddress: string,
    public ref: string,
    public note: string,
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
  selector: 'app-sales-payment',
  templateUrl: './sales-payment.component.html',
  styleUrls: ['./sales-payment.component.css']
})
export class SalesPaymentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
