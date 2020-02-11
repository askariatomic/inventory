import { Component, OnInit } from '@angular/core';

export class Transfer {
  constructor(
    public transferID: number,
    public transferCode: string,
    public transferFaktur: string,
    public ref: number,
    public trxDate: string,
    public note: number,
    public transferFrom: string,
    public transferTo: string,
    public createdDate: number,
    public createdUserID: string,
    public modifiedDate: Date,
    public modifiedUserID: Date
  ){

  }
}

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
