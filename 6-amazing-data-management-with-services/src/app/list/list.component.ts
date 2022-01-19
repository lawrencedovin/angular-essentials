import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../interfaces/person.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  // Allows it to be set outside
  @Input() characters: any;
  @Output() sideAssigned = new EventEmitter<Person>();

  onSideAssigned(charInfo: any) {
    this.sideAssigned.emit(charInfo);
  }

}
