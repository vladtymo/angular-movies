import { Component, Input, OnInit } from '@angular/core';
import { Genre } from 'src/app/genres/genre';
import { genreList } from 'src/app/genres/genre-list';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent implements OnInit {

  @Input()
  genres: Genre[];

  constructor(private genreService: GenresService) { }

  ngOnInit(): void {
    //setTimeout(() => this.genres = this.genreService.getAll(), 700);
    this.genreService.getAll().subscribe((data)=> {
      this.genres = data;
      //console.log(data);
    });
  }
}
