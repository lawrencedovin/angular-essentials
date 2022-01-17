import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  // Display items list given by Parent Component
  @Input() items: string[];

  // Get item value from input
  item: string;

  // Output item value from input on button click.
  @Output() addItem = new EventEmitter<string>();

  addItemClick() {
    this.addItem.emit(this.item);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
