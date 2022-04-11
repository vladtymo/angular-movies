import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Genre } from '../genre';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent implements OnInit {

  constructor(private genreService: GenresService, 
              private router: Router) {}

  ngOnInit(): void {
  }

  submit(genre: Genre): void {

    // Saving data... (request to create a new genre)
    
    this.genreService.create(genre).subscribe(result => {
      alert("Created!");
      this.router.navigate(["genres"]);
    }, error => {
      alert("Error!");
      console.log(error);
    });
  }
}
