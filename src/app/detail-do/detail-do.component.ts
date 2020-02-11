import { Component, OnInit } from '@angular/core';

export class DetailDo {
  constructor(
    public doID: number,
    public doNo: string,
    public doFaktur: string,
    public productID: number,
    public productName: string,
    public price: number,
    public qty: number,
    public deliveredQty: number,
    public deliveredStatus: string,
    public factoryID: number,
    public factoryName: string,
    public note: string,
    public createdDate: Date,
    public createdUserID: number,
    public modifiedDate: Date,
    public modifiedUserID: number
  ){

  }
}

@Component({
  selector: 'app-detail-do',
  templateUrl: './detail-do.component.html',
  styleUrls: ['./detail-do.component.css']
})
export class DetailDoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
