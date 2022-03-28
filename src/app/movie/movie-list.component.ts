import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { movieList } from '../movie-list';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieComponent implements OnInit {

  message: string = "Hello";
  date: Date = new Date(Date.now());
  
  @Input()
  movies: Movie[];

  constructor() { }

  ngOnInit(): void {
    //setTimeout(() => this.movies = movieList, 1000);
  }

  getSqrt(num: number): number {
    return num * num;
  }

  removeMovie(index: number): void {
    this.movies.splice(index, 1);
  }
}
