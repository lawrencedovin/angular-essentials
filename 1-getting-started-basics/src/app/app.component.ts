import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'getting-started-basics';
  age = 28;
  name = 'Lawrence'
  greeting = 'Hello World';
  message = `${this.greeting} my name is ${this.name} and I am ${this.age} years old!`;
}