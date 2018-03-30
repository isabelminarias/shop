import { Component, OnInit } from '@angular/core';
import { User } from '../service/user';
import { NgForm, FormBuilder, NgModel, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  rForm: FormGroup; 
  username:string = 'janedoe';
  password:string = '';
  regForm: FormGroup;
  jsonRegister;

  login=false;
  constructor(private fb: FormBuilder) { 
    this.rForm = fb.group({
      'username': [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(8)])]
    })

    this.regForm = fb.group({
      'fname': [null, Validators.required],
      'lname': [null, Validators.required],
      'username': [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      'email': [null, Validators.compose([Validators.required, Validators.email])], 
      'type': [null, Validators.required]
    })

  }

  addUser(u){
    this.username = u.username;
    this.password = u.password; 
  }

  addRegister(r){
    this.jsonRegister= {'name': r.fname + " " + r.lname, 'username': r.username, 'password': r.password , 'email': r.email+ "com", 'usertype': r.usertype}
  }

  ngOnInit() {
    
  }

  change(n: number){
    if(n===0){
      this.login =false; 
    }
    else{
      this.login = true;
    }
  }
}
