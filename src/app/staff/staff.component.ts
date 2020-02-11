import { Component, OnInit } from '@angular/core';

export class Staff {
  constructor(
    public staffID: number,
    public staffCode: string,
    public staffName: string,
    public address: string,
    public address2: string,
    public village: string,
    public district: string,
    public city: string,
    public zipCode: string,
    public province: string,
    public phone: string,
    public position: string,
    public part: string,
    public status: string,
    public level: string,
    public photo: string,
    public email: string,
    public password: string,
    public lastLogin: Date,
    public createdDate: Date,
    public createdUserID: number,
    public modifiedDate: Date,
    public modifiedUserID: number
  ){

  }
}

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
