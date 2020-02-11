import { Component, OnInit } from '@angular/core';

export class Supplier {
  constructor(
    public supplierID: number,
    public supplierCode: string,
    public supplierName: string,
    public address: string,
    public city: string,
    public phone: string,
    public fax: string,
    public contactPerson: string,
    public email: string,
    public balance: number,
    public createdDate: Date,
    public createdUserID: number,
    public modifiedDate: Date,
    public modifiedUserID: number
  ){

  }
}

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
