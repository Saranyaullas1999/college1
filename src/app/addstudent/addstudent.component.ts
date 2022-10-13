import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor() { }

  name=""
  rollno=""
  college=""
  admissionNo=""
  parentName=""
  dob=""
  address=""
  mobile=""
  parentNo=""
  email=""
  bloodgroup=""


  readValues=()=>{
    let data={
      "name":this.name,
  "rollno":this.rollno,
  "college":this.college,
  "admissionNo":this.admissionNo,
  "parentName":this.parentName,
  "dob":this.dob,
  "address":this.address,
  "mobile":this.mobile,
  "parentNo":this.parentNo,
  "email":this.email,
  "bloodgroup":this.bloodgroup
    }
    console.log(data)
  }



  ngOnInit(): void {
  }

}
