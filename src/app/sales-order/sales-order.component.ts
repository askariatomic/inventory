import { Component, OnInit } from '@angular/core';

export class SalesOrder {
  constructor(
    public soID: number,
    public soNo: string,
    public soFaktur: string,
    public customerID: number,
    public customerName: string,
    public customerAddress: string,
    public staffID: number,
    public staffName: string,
    public orderDate: Date,
    public needDate: Date,
    public note: string,
    public status: string,
    public createdDate: Date,
    public createdUserID: number,
    public modifiedDate: Date,
    public modifiedUserID: number
  ){

  }
}

@Component({
  selector: 'app-sales-order',
  templateUrl: './sales-order.component.html',
  styleUrls: ['./sales-order.component.css']
})
export class SalesOrderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
