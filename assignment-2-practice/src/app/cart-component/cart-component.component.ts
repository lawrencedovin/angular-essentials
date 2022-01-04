import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent {
  //Input get value from Parent.
  @Input() items: string[] = [];
  //Event Emitter Outputs a value to a Parent Component.
  @Output() onAddItem = new EventEmitter<string>();
  item: string;

  onAddItemClick(event: Event) {
    this.onAddItem.emit(this.item);
  }
}
