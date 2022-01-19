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

  onSideChosen(characterInformation: {name: string, side: string}) {
    const position = this.characters.findIndex((chararacter) => {
      return chararacter.name === characterInformation.name;
    })
    this.characters[position].side = characterInformation.side;
  }
}

export interface Person {
  name: string;
  side: string;
}
