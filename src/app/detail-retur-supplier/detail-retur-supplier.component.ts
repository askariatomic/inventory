import { Component, OnInit } from '@angular/core';

export class DetailReturSupplier {
  constructor(
    public detailID: number,
    public returID: number,
    public returNo: string,
    public factoryID: number,
    public factoryName: string,
    public productID: number,
    public productName: string,
    public qty: number,
    public unitPrice: number,
    public note: string,
    public createdDate: Date,
    public createdUserID: number,
    public modifiedDate: Date,
    public modifiedUserID: number
  ){

  }
}

@Component({
  selector: 'app-detail-retur-supplier',
  templateUrl: './detail-retur-supplier.component.html',
  styleUrls: ['./detail-retur-supplier.component.css']
})
export class DetailReturSupplierComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
