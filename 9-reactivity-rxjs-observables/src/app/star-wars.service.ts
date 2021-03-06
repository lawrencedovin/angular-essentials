import { Person } from "./interfaces/person.interface";
import { LogService } from "./log.service";
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  private characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' }
  ];

  charactersChanges = new Subject<void>();

  constructor(private logService: LogService) {}

  getCharacters(chosenList: string) {
    if(chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((character) => {
      return character.side === chosenList;
    })
  }

  // Whenever this function is executed sends the updated characters list to subscribed components because of .next()
  onSideChosen(characterInformation: Person) {
    let {name, side} = characterInformation;
    const position = this.characters.findIndex((chararacter) => {
      return chararacter.name === name;
    })
    // This is where we did change the characters array when changing sides.
    // So our components needs to fetch a new copy
    this.characters[position].side = side;

    // .next() is used to emit the next value and lets components that are subscribed
    // know that the starwars service has been updated once this function executes.
    // We emit the next value for the Subject.
    this.charactersChanges.next();

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
      this.characters.push(newCharacter)
    }

  }
}
