import { Component, OnInit } from '@angular/core';

export class DetailReturStaff {
  constructor(
    public detailID: number,
    public returID: number,
    public returNo: string,
    public factoryID: number,
    public factoryName: string,
    public productID: number,
    public productName: string,
    public qty: number,
    public unitPrice: number,
    public note: string,
    public createdDate: Date,
    public createdUserID: number,
    public modifiedDate: Date,
    public modifiedUserID: number
  ){

  }
}

@Component({
  selector: 'app-detail-retur-staff',
  templateUrl: './detail-retur-staff.component.html',
  styleUrls: ['./detail-retur-staff.component.css']
})
export class DetailReturStaffComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
