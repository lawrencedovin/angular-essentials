import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  items = ['Apples', 'Bananas', 'Cherries'];

  onAddItem(event: any) {
    this.items = [...this.items, event];
  }
}
