import { Component, OnInit } from '@angular/core';

export class Debt {
  constructor(
    public debtID: number,
    public debtNo: string,
    public invoiceID: number,
    public invoiceNo: string,
    public supplierID: number,
    public supplierName: string,
    public supplierAddress: string,
    public debtTotal: number,
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
  selector: 'app-debt',
  templateUrl: './debt.component.html',
  styleUrls: ['./debt.component.css']
})
export class DebtComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
