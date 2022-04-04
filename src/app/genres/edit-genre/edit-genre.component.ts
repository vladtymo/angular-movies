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
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
   }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required]
    });

    this.activatedRoute.params.subscribe(params => {
      console.log(params.id);
      // get genre by id
      this.genre = {id: 1, name: "Test Genre"};

      this.form.patchValue(this.genre);
    });

  }

  submit(): void {

    if(this.form.controls["name"].errors)
      alert("Invalid data!");
    else
      alert(this.form.controls["name"].value);

    // Saving data... (request to edit genre)
    this.router.navigate(["/genres/"]);
  }
}
