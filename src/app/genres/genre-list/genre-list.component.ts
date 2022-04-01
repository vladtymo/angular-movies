import { Component, Input, OnInit } from '@angular/core';
import { Genre } from 'src/app/genre';
import { genreList } from 'src/app/genre-list';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent implements OnInit {

  @Input()
  genres: Genre[];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.genres = genreList, 700);
  }

}
