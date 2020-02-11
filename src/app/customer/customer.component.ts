import { Component, OnInit } from '@angular/core';

export class Customer {
  constructor(
    public customerID: number,
    public customerCode: string,
    public customerName: string,
    public contactPerson: string,
    public address: string,
    public address2: string,
    public village: string,
    public district: string,
    public city: string,
    public zipCode: number,
    public province: string,
    public phone1: string,
    public phone2: string,
    public phone3: string,
    public fax1: string,
    public fax2: string,
    public fax3: string,
    public phonecp1: string,
    public phonecp2: string,
    public email: string,
    public limitBalance: number,
    public balance: number,
    public disc1: number,
    public disc2: number,
    public disc3: number,
    public note: string,
    public npwp: string,
    public pkpName: string,
    public staffCode: string,
    public createdDate: Date,
    public createdUserID: number,
    public modifiedDate: Date,
    public modifiedUserID: number
  ){

  }
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
