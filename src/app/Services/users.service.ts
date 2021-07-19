import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private ourClient:HttpClient) { }
  baseUrl ='http://localhost:3000/Users'
  
  

  getAllUsers(){
    return this.ourClient.get(this.baseUrl);
  }

  getUserById(id:number){
    return this.ourClient.get(this.baseUrl+"/"+id)
  }
  
  createUser(body:any){
    console.log(body);
    return this.ourClient.post(this.baseUrl,body);

  }
  updateUserById(id:number, body:any){
    return this.ourClient.put(`${this.baseUrl}/${id}`,body)
  }
  deleteUserById(id:number){
    return this.ourClient.delete(this.baseUrl+"/"+id)
  }
}
