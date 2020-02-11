import { Component, OnInit } from '@angular/core';

export class DetailTransfer {
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
  selector: 'app-detail-transfer',
  templateUrl: './detail-transfer.component.html',
  styleUrls: ['./detail-transfer.component.css']
})
export class DetailTransferComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
