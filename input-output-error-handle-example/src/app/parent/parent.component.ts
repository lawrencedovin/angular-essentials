import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  // Parent initiates items which passes to child component
  items = ['Guitar', 'Ukulele', 'Oud'];

  // Method for receiving the Output from a child component and updating the items list
  addItem(event: string) {
    this.items = [...this.items, event]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
