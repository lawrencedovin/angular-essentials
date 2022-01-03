import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})

export class CartComponentComponent {
  @Input() items: Array<string> = [];
  @Output() onAddItem = new EventEmitter<string>();
  item: string;

  onAddItemClick(event: Event) {
    this.onAddItem.emit(this.item);
  }
}
