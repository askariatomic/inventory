import { Component, OnInit } from '@angular/core';

export class Module {
  constructor(
    public modulID: number,
    public modulName: string,
    public authorize: string,
    public status: string,
    public modifiedDate: Date,
    public modifiedUserID: number
  ){

  }
}

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
