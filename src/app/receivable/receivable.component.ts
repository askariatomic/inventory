import { Component, OnInit } from '@angular/core';

export class Receivable {
  constructor(
    public receiveID: number,
    public receiveNo: string,
    public invoiceID: number,
    public invoiceNo: string,
    public customerID: number,
    public customerName: string,
    public customerAddress: string,
    public receiveTotal: number,
    public incomingTotal: number,
    public reductionTotal: number,
    public status: string,
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
  selector: 'app-receivable',
  templateUrl: './receivable.component.html',
  styleUrls: ['./receivable.component.css']
})
export class ReceivableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
