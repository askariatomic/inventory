import { Component, OnInit } from '@angular/core';

export class StockProduct {
  constructor(
    public stockProductID: number,
    public productID: number,
    public factoryID: number,
    public stock: number,
    public createdDate: Date,
    public createdUserID: number,
    public modifiedDate: Date,
    public modifiedUserID: number
  ){

  }
}

@Component({
  selector: 'app-stock-product',
  templateUrl: './stock-product.component.html',
  styleUrls: ['./stock-product.component.css']
})
export class StockProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
