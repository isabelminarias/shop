import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, NgModel, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  colour=['black', 'white', 'blue', 'beige', 'gold', 'silver', 'red', 'purple', 'maroon', 'navy', 'gray', 'brown', 'orange', 'other']
  cForm;
  car;
  make; model;year;plate;color;
  constructor(fb: FormBuilder) {
    this.cForm = fb.group({
      'make': [null, Validators.required],
      'model': [null, Validators.required],
      'year' : [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(4)])],
      'plate': [null, Validators.required],
      'color': [null, Validators.required],
      'new': [null, Validators.required],
      'img': ''
    })
   }
  
  ngOnInit() {
  }

  register(form){
    this.car = form
  }
}
