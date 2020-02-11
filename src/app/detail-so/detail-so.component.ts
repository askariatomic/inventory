import { Component, OnInit } from '@angular/core';

export class DetailSo {
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
  selector: 'app-detail-so',
  templateUrl: './detail-so.component.html',
  styleUrls: ['./detail-so.component.css']
})
export class DetailSoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
