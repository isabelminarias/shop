import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientcar',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class ClientCarComponent implements OnInit {
cars=[{'make': 'Mercedes'}, {'make':'BMW'}, {'make': 'Subaru'}]
inShop=true;
menuView; historyView =2 ; max = 5; item;
sample=[1,2,3,4,5];
car=1;
  constructor() { }

  ngOnInit() {
  }

  switch(n:number){
    this.menuView=n;
  }
  switchH(n:number){
    if(n===0 && this.historyView !== 0){
      this.historyView= this.historyView -1;
      
    }
    else if (n === 1 && this.historyView < this.max){
      this.historyView = this.historyView +1; 
    }

  }
  switchItem(n:number){
    this.historyView = n;
  }
  switchCar(n:number){
    this.car = n; 
  }
  switchC(n:number){
    if(n===0 && this.car !== 1){
      this.car= this.car -1;
      
    }
    else if (n === 1 && this.car < this.max){
      this.car = this.car +1; 
    }
  }

}
