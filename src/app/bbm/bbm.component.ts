import { Component, OnInit } from '@angular/core';

export class Bbm {
  constructor(
    public bbmID: number,
    public bbmFaktur: string,
    public bbmNo: string,
    public spbID: number,
    public spbNo: string,
    public supplierID: number,
    public supplierName: string,
    public supplierAddress: string,
    public staffID: number,
    public staffName: string,
    public receiveDate: Date,
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
  selector: 'app-bbm',
  templateUrl: './bbm.component.html',
  styleUrls: ['./bbm.component.css']
})
export class BbmComponent implements OnInit {

  // bbms = []
  message: string

  bbms = [
    { bbmFaktur: 1, bbmNo: 'A1' },
    { bbmFaktur: 2, bbmNo: 'A2' },
    { bbmFaktur: 3, bbmNo: 'B5' }
  ]

  constructor() { }

  ngOnInit() {
  }

}
