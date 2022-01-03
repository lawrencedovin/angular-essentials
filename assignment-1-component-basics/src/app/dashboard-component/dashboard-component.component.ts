import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent implements OnInit {

  loadState = 'loading';
  username = '';

  onButtonClick(event: Event) {
    this.loadState === 'loading' ? this.loadState = 'finished' : this.loadState = 'loading';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
