import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for-loop',
  templateUrl: './ng-for-loop.component.html',
  styleUrls: ['./ng-for-loop.component.css']
})
export class NgForLoopComponent {
  newItem = ''
  groceries = ['Apples', 'Grapes', 'Potatoes'];
  backgroundColor(i: number) {
    return i % 2 === 0 ? '#42b883' : '#35495e';
  }
  value = true;
  toggle(value: boolean){
    this.value = value === true ? false : true;
    return this.value;
  }
}
