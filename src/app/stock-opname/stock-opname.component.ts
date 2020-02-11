import { Component, OnInit } from '@angular/core';

export class StockOpname {
  constructor(
    public soID: number,
    public soDate: Date,
    public productID: number,
    public productName: string,
    public factoryID: number,
    public factoryName: string,
    public productStock: number,
    public realStock: number,
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
  selector: 'app-stock-opname',
  templateUrl: './stock-opname.component.html',
  styleUrls: ['./stock-opname.component.css']
})
export class StockOpnameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
