import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // rootName changes the property customName of the Child Component
  rootName = 'Lawrence';

  // Event listener where the input from the Child updates the Parent Property of rootName which
  // updates the customName of the Child Component.
  // nameChanged Input Value updates the rootName by the onNameChanged method which in returns updates customName.
  // rootName (parent) => customName (child),
  // nameChanged Input Value (child) => onNameChanged Updates rootName (parent), updated rootName (parent) => customName (child)
  // Changes goes around from parent to child [rootName to customName]
  // from child to parent [nameChanged onNameChanged]
  // from parent to child [rootName to customName]

  onNameChanged(newName) {
    this.rootName = newName;
  }
}
