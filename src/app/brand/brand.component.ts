import { Component, OnInit } from '@angular/core';

export class Brand {
  constructor(
    public brandID: number,
    public brandName: string,
    public status: string,
    public createdDate: Date,
    public createdUserID: number,
    public modifiedDate: Date,
    public modifiedUserID: number
  ){

  }
}
  
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
