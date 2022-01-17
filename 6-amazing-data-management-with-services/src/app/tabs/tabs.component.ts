import { Component } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  providers: [StarWarsService]
})
export class TabsComponent {
  characters: Array<{ name: string, side: string }> = [];
  chosenList = 'all';

  constructor(private starWarsService: StarWarsService) {}

  onChoose(side: string) {
    this.chosenList = side;
  }

  getCharacters() {
      this.characters = this.starWarsService.getCharacters(this.chosenList);
      return this.characters;
  }

}
