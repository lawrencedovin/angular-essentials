import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for-loop',
  templateUrl: './ng-for-loop.component.html',
  styleUrls: ['./ng-for-loop.component.css']
})
export class NgForLoopComponent {
  newItem = ''
  groceries = ['Apples', 'Grapes', 'Potatoes'];
}
