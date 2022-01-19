import { Person } from "./interfaces/person.interface";
import { LogService } from "./log.service";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  private characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' }
  ];

  constructor(private logService: LogService) {}

  getCharacters(chosenList: string) {
    if(chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((character) => {
      return character.side === chosenList;
    })
  }

  onSideChosen(characterInformation: Person) {
    let {name, side} = characterInformation;
    const position = this.characters.findIndex((chararacter) => {
      return chararacter.name === name;
    })
    this.characters[position].side = side;
    // Using logService
    this.logService.writeLog(`Changed side of: ${name}, new side: ${side}`);
  }

  addCharacter(name: string, side: string) {
    // {name: name, side: side}
    const newCharacter = {name, side};

    // Checking duplicates
    const position = this.characters.findIndex((chararacter) => {
      return chararacter.name === name;
    })

    // If it doesn't find a duplicate add the character
    if(position === -1) {
      // newCharacter.name !== '' ? this.characters.push(newCharacter) : alert('Error');
    }

  }
}
