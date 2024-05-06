import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class Form1Service {

  url=''
  constructor( private httpClient :HttpClient) { }

  enroll=(user:User)=>{
     return this.httpClient.post<any>(this.url,user)
  }
}
