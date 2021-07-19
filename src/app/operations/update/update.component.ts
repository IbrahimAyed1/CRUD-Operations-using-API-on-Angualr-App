import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id:number;
  constructor(ourActiveRoute: ActivatedRoute,private myService:UsersService) { 
    this.id = ourActiveRoute.snapshot.params.id;
  }
  _name:string;
  _id:number;
  _userName:string;
  _email:string;

  @Input() currUser:any;

  ngOnInit(): void {
  }
  setData(){
    let User:{name:string,id:number,userName:string,email:string} = {name:this._name,id:this._id,userName:this._userName,email:this._email};
    this.myService.updateUserById(this.id,User).subscribe();
    console.log("Success");
  }
}
