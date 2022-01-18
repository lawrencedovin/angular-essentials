import { query } from '@angular/animations';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // Parent gives list of items
  @Input() items: Array<string>

  // Input for item to add to list of items
  item: string;

  // Output to send data to Parent, used as a click listener.
  @Output() addItem = new EventEmitter<string>();

  button = document.querySelector("#addItemButton");

  // Error
  showError = false;
  error: string;

  // Gets per keystroke value and validates the Input.
  onUserInput(event: Event) {
    let inputValue = (event.target as HTMLInputElement).value;
    let addItemButton = (document.querySelector("#addItemButton") as HTMLButtonElement);
    if(inputValue.length > 10) {
      addItemButton.disabled = true;
      this.showError = true;
      this.error = "Item can't be more than 10 characters long.";
    }
    else {
      addItemButton.disabled = false;
      this.showError = false;
      this.error = "";
    }
  }

  // Button click triggers sending new item to parent component
  addItemClick() {
    this.addItem.emit(this.item);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
