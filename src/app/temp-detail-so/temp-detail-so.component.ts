import { Component, OnInit } from '@angular/core';

export class TempDetailSo {
  constructor(
    public detailID: number,
    public soNo: string,
    public soFaktur: string,
    public productID: number,
    public productName: string,
    public price: number,
    public qty: number,
    public note: string,
    public createdDate: Date,
    public createdUserID: number,
    public modifiedDate: Date,
    public modifiedUserID: number
  ){

  }
}

@Component({
  selector: 'app-temp-detail-so',
  templateUrl: './temp-detail-so.component.html',
  styleUrls: ['./temp-detail-so.component.css']
})
export class TempDetailSoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
