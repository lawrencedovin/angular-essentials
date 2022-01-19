import { Person } from "./interfaces/person.interface";

export class StarWarsService {
  private characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' }
  ];

  getCharacters(chosenList: string) {
    if(chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((character) => {
      return character.side === chosenList;
    })
  }

  onSideChosen(characterInformation: Person) {
    // Loops through characters list returning the Index where the
    // character's name matches the passed in characterInformation
    const position = this.characters.findIndex((chararacter) => {
      return chararacter.name === characterInformation.name;
    })
    // Once the character in the list is matched to the passed in characterInformation
    // the character is then updated to the chosen side which was clicked.
    // in item.ts
    // onSideChosen(side: string) {
    //   this.starWarsService.onSideChosen({name: this.character.name, side: side});
    // }
    // this.character.name in item.ts is inputted by the list component when looping the characters.
    // the characters in list component is inputted by the tabs componet.
    // the tabs component gets the character list from the star-wars.service.ts's getCharacters method
    // which return a list of filtered characters by their side.

    this.characters[position].side = characterInformation.side;
  }
}
