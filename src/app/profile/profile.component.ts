import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id:number;
  student:any;
  failedMsg:string;
  constructor(ourActiveRoute: ActivatedRoute,private myService:UsersService) { 
    this.id = ourActiveRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.myService.getUserById(this.id).subscribe(
      (res) => {
        this.student=res;
      },
      (fail) =>{
        this.failedMsg="No Data Found";
      }
    )
  }

}
