import { Component, OnInit } from '@angular/core';

export class DetailSpb {
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
    public modifiedUserID: number
  ){

  }
}

@Component({
  selector: 'app-detail-spb',
  templateUrl: './detail-spb.component.html',
  styleUrls: ['./detail-spb.component.css']
})
export class DetailSpbComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
