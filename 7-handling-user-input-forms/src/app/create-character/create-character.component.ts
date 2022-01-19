import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  availableSides = [
    {display: 'None', value: ''},
    {display: 'Light', value: 'light'},
    {display: 'Dark', value: 'dark'}
  ]

  isFormInvalid: boolean;

  constructor(private starWarsService: StarWarsService) { }

  ngOnInit(): void {}

  onSubmit(submittedForm: NgForm) {
    console.log(submittedForm.value);

    let {name, side} = submittedForm.value;

    if(submittedForm.invalid) {
      this.isFormInvalid = true;
      return;
    }
    else {
      this.isFormInvalid = false;
      this.starWarsService.addCharacter(name, side);
    }
  }


}
