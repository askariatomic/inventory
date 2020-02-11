import { Component, OnInit } from '@angular/core';

export class TempDetailTransfer {
  constructor(
    public detailID: number,
    public transferCode: string,
    public transferFaktur: string,
    public productID: number,
    public productName: string,
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
  selector: 'app-temp-detail-transfer',
  templateUrl: './temp-detail-transfer.component.html',
  styleUrls: ['./temp-detail-transfer.component.css']
})
export class TempDetailTransferComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
