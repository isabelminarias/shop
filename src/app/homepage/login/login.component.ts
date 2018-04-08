import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, NgModel, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../../service/user.service'
import { User } from '../../service/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  rForm: FormGroup; 
  regForm: FormGroup;
  jsonRegister; jsonUser; user;
  
  log = true;
  constructor(private fb: FormBuilder, private api: ApiService) { 
    this.rForm = fb.group({
      'username': [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(8)])]
    })

    this.regForm = fb.group({
      'fname':    [null, Validators.required],
      'lname':    [null, Validators.required],
      'username': [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      'email':    [null, Validators.compose([Validators.required, Validators.email])], 
      'usertype': [null, Validators.required]
    })

  }

  login(u){
     this.api.login(u).subscribe((res)=>this.user) 
  }

  addRegister(r){
    
  }

  ngOnInit() {
    
  }

  change(n: number){
    if(n===0){
      this.log =false; 
    }
    else{
      this.log = true;
    }
  }
}
