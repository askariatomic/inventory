import { Component, OnInit } from '@angular/core';

export class ReturStaff {
  constructor(
    public returID: number,
    public returNo: string,
    public returDate: Date,
    public invoiceNo: string,
    public customerID: number,
    public customerName: string,
    public customerAddress: string,
    public returType: string,
    public subtotal: number,
    public ppnType: number,
    public ppn: number,
    public grandtotal: number,
    public staffID: number,
    public staffName: string,
    public ref: string,
    public note: string,
    public createdDate: Date,
    public createdUserID: number,
    public modifiedDate: Date,
    public modifiedUserID: number
  ){

  }
}

@Component({
  selector: 'app-retur-staff',
  templateUrl: './retur-staff.component.html',
  styleUrls: ['./retur-staff.component.css']
})
export class ReturStaffComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
