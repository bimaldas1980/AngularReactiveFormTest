import { ChildItem } from './../models/main.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {

  lengthOfFirstName: number;

  constructor() { }

  ngOnInit() {
  }

  getItem() {
    return this.lengthOfFirstName;
  }
}
