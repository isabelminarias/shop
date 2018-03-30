import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  userLoggedIn // this tells me if there is an user or if there isn't

  client = [{name: 'home', link: '/client'},{name: 'cars', link: '/client/car'},{name: 'appointments', link: '/client/apps'}]
  manager
  mechanic
  admin
  navs = [this.client,this.mechanic, this.manager, this.admin]
  menu
  constructor() { }

  ngOnInit() {
    this.userLoggedIn = false; 
    this.menu = this.navs[0] // so basically usertype - 1
  }

  changeLog(){
    this.userLoggedIn = !this.userLoggedIn
  }
}
