import { Component, OnInit } from '@angular/core';

export class DetailBbm {
  constructor(
    public detailID: number,
    public bbmNo: string,
    public bbmFaktur: string,
    public productID: number,
    public productName: string,
    public price: number,
    public qty: number,
    public receiveQty: number,
    public receiveStatus: string,
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
  selector: 'app-detail-bbm',
  templateUrl: './detail-bbm.component.html',
  styleUrls: ['./detail-bbm.component.css']
})
export class DetailBbmComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
