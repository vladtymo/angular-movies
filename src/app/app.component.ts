import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
import { movieList } from './movie-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Blabla App';

  oldMovies: Movie[];
  newMovies: Movie[];

  ngOnInit(): void {
    setTimeout(() => {
      this.oldMovies = movieList.filter((m) => m.year < 2012);
      this.newMovies = movieList.filter((m) => m.year >= 2012);
    }, 1000);
  }
}