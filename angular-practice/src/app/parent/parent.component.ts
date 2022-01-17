import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  items = ['Apple', 'Bananas', 'Grapes'];

  addItem(event: string) {
    this.items = [...this.items, event];
  }

  constructor() { }

  ngOnInit(): void {
  }

}
