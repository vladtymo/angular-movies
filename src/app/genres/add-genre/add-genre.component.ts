import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent implements OnInit {

  //fb: FormBuilder;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    //this.fb = formBuilder;
   }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  submit(): void {

    if(this.form.controls["name"].errors)
      alert("Invalid data!");
    else
      alert(this.form.controls["name"].value);

    // Saving data... (request to create a new genre)
  }
}
