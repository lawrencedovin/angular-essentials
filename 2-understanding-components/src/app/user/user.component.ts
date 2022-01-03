import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username = "Enter Username";
  error = 'Username needs 6 characters minimum.';
  showError = false;

  @Input() message: string;

  constructor() {}

  onUserInput(event: Event) {
      let inputValue = (event.target as HTMLInputElement).value;
      this.username = inputValue;
      inputValue.length < 7 ? this.showError = true : this.showError = false;
  }

  ngOnInit(): void {
  }

}
