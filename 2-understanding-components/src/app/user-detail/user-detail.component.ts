import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user = {
    'name': 'Lawrence',
    'age': 28,
    'favoriteFood': 'Pizza'
  }

  generateUserDetails(user: Object) {
    let userArr: Array<string> = [];
    for(let key in user) {
      userArr.push(`${key}: ${user[key]}`);
    }
    return userArr;
  }

  userDetails = this.generateUserDetails(this.user);

  constructor() { }

  ngOnInit(): void {
  }

}
