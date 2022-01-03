import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-events',
  templateUrl: './custom-events.component.html',
  styleUrls: ['./custom-events.component.css']
})
export class CustomEventsComponent{

  @Input() customName: string;
  // Used to Output from the Child Component to the parent.
  @Output() nameChanged = new EventEmitter<string>();

  onUserInput(event) {
    // Outputting the Input Value from the Child Component to the parent.
    this.nameChanged.emit(event.target.value);
  }

}
