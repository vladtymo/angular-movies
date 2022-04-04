import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Genre } from '../genre';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css']
})
export class EditGenreComponent implements OnInit {

  genre: Genre;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params.id);
      // get genre by id
      this.genre = {id: 1, name: "Test Genre"};
    });

  }

  submit(genre: Genre): void {

    // Saving data... (request to edit genre)
    alert("Edited");
    this.router.navigate(["/genres/"]);
  }
}
