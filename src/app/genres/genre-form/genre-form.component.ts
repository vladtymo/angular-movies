import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Genre } from '../genre';

@Component({
  selector: 'app-genre-form',
  templateUrl: './genre-form.component.html',
  styleUrls: ['./genre-form.component.css']
})
export class GenreFormComponent implements OnInit {

  @Output()
  onSave: EventEmitter<Genre> = new EventEmitter<Genre>();
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
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

    // transfer data to parent component
    this.onSave.emit(this.form.value);
  }
}
