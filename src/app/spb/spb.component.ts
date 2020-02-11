import { Component, OnInit } from '@angular/core';

export class Spb {
  constructor(
    public spbID: number,
    public spbNo: string,
    public spbFaktur: string,
    public supplierID: number,
    public supplierName: string,
    public supplierAddress: string,
    public staffID: number,
    public staffName: string,
    public orderDate: Date,
    public needDate: Date,
    public note: string,
    public status: number,
    public createdDate: Date,
    public createdUserID: number,
    public modifiedDate: Date,
    public modifiedUserID: number
  ){

  }
}

@Component({
  selector: 'app-spb',
  templateUrl: './spb.component.html',
  styleUrls: ['./spb.component.css']
})
export class SpbComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
