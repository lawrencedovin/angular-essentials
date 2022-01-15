import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {

  characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' }
  ];

  chosenList = 'all';

  getCharacters() {
    if(this.chosenList === 'all') {
      return this.chosenList.slice();
    }
    return this.characters.filter((char) => {
      return char.side === this.chosenList;
    })
  }

  onChoose(side: string) {
    this.chosenList = side;
  }

}
