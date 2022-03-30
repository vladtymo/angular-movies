import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { movieList } from '../movie-list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  oldMovies: Movie[];
  newMovies: Movie[];

  ngOnInit(): void {
    setTimeout(() => {
      this.oldMovies = movieList.filter((m) => m.year < 2012);
      this.newMovies = movieList.filter((m) => m.year >= 2012);
    }, 1000);
  }
}
