import { Component, Input, Output, EventEmitter } from '@angular/core';
import { StarWarsService } from '../star-wars.service';
import { Person } from '../interfaces/person.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers: [StarWarsService]
})
export class ItemComponent{

  @Input() character: any;
  @Output() sideAssigned = new EventEmitter<Person>();
  // @Output() sideAssigned = new EventEmitter<{name: string, side: string}>();

  constructor(private starWarsService: StarWarsService) {}

  onSideChosen(side: string) {
    this.starWarsService.onSideChosen({name: this.character.name, side: side});
  }
}
