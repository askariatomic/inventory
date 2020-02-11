import { Component, OnInit } from '@angular/core';

export class Factory {
  constructor(
    public factoryID: number,
    public factoryCode: string,
    public factoryName: string,
    public factoryType: string,
    public status: string,
    public note: string,
    public createdDate: Date,
    public createdUserID: number,
    public modifiedDate: Date,
    public modifiedUserID: number
  ){

  }
}

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css']
})
export class FactoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
