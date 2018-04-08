import { Injectable } from '@angular/core';
import 'rxjs';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject'
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from './user';

@Injectable()
export class ApiService {
  
  currentUser: any = null;
  public userStatus = new Subject<any>()
  


  //links
  verifyURL= "http://localhost:3000/api/login/verify"

  constructor(private http: HttpClient) {
   }
  setUserStatus(val){
    this.userStatus = val
  }
  getUser(){return this.currentUser}
  login(data){
    return this.http.post<User>(this.verifyURL, data)
  }

}
