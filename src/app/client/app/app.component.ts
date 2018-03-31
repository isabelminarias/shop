import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, NgModel, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'clientapp-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class ClientAppComponent implements OnInit {
  app
  constructor(fb: FormBuilder) {
    this.app = fb.group({
      'date': [null, Validators.required]
    })
   }

  ngOnInit() {
  }


}
