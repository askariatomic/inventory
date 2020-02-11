import { Component, OnInit } from '@angular/core';

export class TempDetailSpb {
  constructor(
    public detailID: number,
    public spbNo: string,
    public spbFaktur: string,
    public productID: number,
    public productName: string,
    public price: number,
    public qty: number,
    public note: string,
    public createdDate: Date,
    public createdUserID: number,
    public modifiedDate: Date,
    public modifiedUserID: number,
  ){

  }
}

@Component({
  selector: 'app-temp-detail-spb',
  templateUrl: './temp-detail-spb.component.html',
  styleUrls: ['./temp-detail-spb.component.css']
})
export class TempDetailSpbComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
