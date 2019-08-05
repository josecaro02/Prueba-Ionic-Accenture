import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';


let apiUrlUsers ='https://testbankapi.firebaseio.com/clients.json';

@Injectable({
  providedIn: 'root'
})
export class RestApiServiceService {

  

  constructor(public http:Http) { }

  getUsers() {
    return new Promise(resolve => {
      this.http.get(apiUrlUsers).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  postDataUser(credentials, type){

    return new Promise((resolve, reject) =>{
      let headers = new Headers();
      this.http.post(apiUrlUsers, (credentials), {headers :headers}).
      subscribe(res =>{
        resolve(res);
      }, (err) =>{
        reject(err);
      });

    });

  }

}//class
