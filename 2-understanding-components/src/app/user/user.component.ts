import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  message = "hello from user!";

  constructor() {}

  onUserInput(event: Event) {
      this.message = (event.target as HTMLInputElement).value;
  }

  ngOnInit(): void {
  }

}
