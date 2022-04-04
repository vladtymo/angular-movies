import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Genre } from '../genre';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {
  }

  submit(genre: Genre): void {

    alert("Created");
    // Saving data... (request to create a new genre)
  }
}
