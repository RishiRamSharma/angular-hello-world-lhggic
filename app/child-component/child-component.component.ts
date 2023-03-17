import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
})
export class ChildComponentComponent implements OnInit {
  constructor() {}
  name = '';
  money = 0;
  ngOnInit() {
    this.name = 'Rishi Ram';
    this.money = 50000;
  }
}
