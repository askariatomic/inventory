import { Component, OnInit } from '@angular/core';

export class BuyPayment {
  constructor(
    public paymentID: number,
    public paymentNo: string,
    public invoiceID: number,
    public invoiceNo: string,
    public spbNo: string,
    public paymentDate: Date,
    public payType: string,
    public bankNo: string,
    public bankName: string,
    public bankAC: string,
    public effectiveDate: Date,
    public total: number,
    public supplierID: number,
    public supplierName: string,
    public supplierAddress: string,
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
  selector: 'app-buy-payment',
  templateUrl: './buy-payment.component.html',
  styleUrls: ['./buy-payment.component.css']
})
export class BuyPaymentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
