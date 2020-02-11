import { Component, OnInit } from '@angular/core';

export class DeliveryOrder {
  constructor(
    public doID: number,
    public doNo: string,
    public doFaktur: string,
    public soID: number,
    public soNo: string,
    public customerID: number,
    public customerName: string,
    public customerAddress: string,
    public staffID: number,
    public staffName: string,
    public deliveredDate: Date,
    public orderDate: Date,
    public needDate: Date,
    public total: number,
    public note: string,
    public createdDate: Date,
    public createdUserID: number,
    public modifiedDate: Date,
    public modifiedUserID: number
  ){

  }
}

@Component({
  selector: 'app-delivery-order',
  templateUrl: './delivery-order.component.html',
  styleUrls: ['./delivery-order.component.css']
})
export class DeliveryOrderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
