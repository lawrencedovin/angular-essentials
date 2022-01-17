import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent{
  @Input() character: any;
  @Output() sideAssigned = new EventEmitter<{name: string, side: string}>();

  onAssign(side: string) {
    // this.character.side = side;

    // Outputs the current character name and chosen side.
    this.sideAssigned.emit({name: this.character.name, side: side});
  }
}
