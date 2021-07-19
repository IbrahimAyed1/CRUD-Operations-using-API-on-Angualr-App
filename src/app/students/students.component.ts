import { Component, OnInit } from '@angular/core';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private myService:UsersService) { }
  studentsArr:any;
  failedMsg:string;
  ngOnInit(): void {
    //subscribe to our service to get data the 2 callback functions, success w fail
    this.myService.getAllUsers().subscribe(
      (res)=>{
        this.studentsArr = res;
      },
      (fail)=>{
        this.failedMsg =fail;
      }
    );
  }

}
