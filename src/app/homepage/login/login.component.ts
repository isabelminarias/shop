import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login=false;
  constructor() { }

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
