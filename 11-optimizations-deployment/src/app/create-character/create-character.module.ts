import { NgModule } from "@angular/core";
import { CreateCharacterComponent } from "./create-character.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    CreateCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      // blank because still needs the 'new-character' path setup
      { path: '', component: CreateCharacterComponent }
    ]),
  ]
})
export class CreateCharacterModule {}
