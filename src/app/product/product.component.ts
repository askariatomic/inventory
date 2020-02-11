import { Component, OnInit } from '@angular/core';

export class Product {
  constructor(
    public productID: number,
    public productCode: string,
    public productName: string,
    public categoryID: number,
    public brandID: number,
    public unit: number,
    public unitPrice1: number,
    public unitPrice2: number,
    public unitPrice3: number,
    public hpp: number,
    public purchasePrice: number,
    public note: string,
    public stockAmount: number,
    public image: string,
    public minimumStock: number,
    public createdDate: Date,
    public createdUserID: number,
    public modifiedDate: Date,
    public modifiedUserID: number
  ){

  }
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
