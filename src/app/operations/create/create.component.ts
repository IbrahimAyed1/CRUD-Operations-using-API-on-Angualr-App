import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private myService:UsersService) { }
  _name:string;
  _id:number;
  _userName:string;
  _email:string;
  ngOnInit(): void {
  }
  setData(){
    let User:{name:string,id:number,userName:string,email:string} = {name:this._name,id:this._id,userName:this._userName,email:this._email};
    this.myService.createUser(User).subscribe();
    console.log("Success");
  }
}
