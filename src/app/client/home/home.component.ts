import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clienthome',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class ClientHomeComponent implements OnInit {
  CarsInShop = true; 
  constructor() { }

  ngOnInit() {
  }

}
