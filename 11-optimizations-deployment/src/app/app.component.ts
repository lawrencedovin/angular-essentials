import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { StarWarsService } from './star-wars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '5-course-project';

  constructor(private starWarsService: StarWarsService) {}

  ngOnInit(): void {
    this.starWarsService.fetchCharacters();
  }
}
