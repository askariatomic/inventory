import { Component, OnInit } from '@angular/core';

export class ReturSupplier {
  constructor(
    public returID: number,
    public returNo: string,
    public returDate: Date,
    public invoiceNo: string,
    public supplierID: number,
    public supplierName: string,
    public supplierAddress: string,
    public returType: string,
    public subtotal: number,
    public ppnType: number,
    public ppn: number,
    public grandtotal: number,
    public staffID: number,
    public staffName: string,
    public ref: string,
    public note: string,
    public createdDate: Date,
    public createdUserID: number,
    public modifiedDate: Date,
    public modifiedUserID: number
  ){

  }
}

@Component({
  selector: 'app-retur-supplier',
  templateUrl: './retur-supplier.component.html',
  styleUrls: ['./retur-supplier.component.css']
})
export class ReturSupplierComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
