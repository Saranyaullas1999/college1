import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchstudent',
  templateUrl: './searchstudent.component.html',
  styleUrls: ['./searchstudent.component.css']
})
export class SearchstudentComponent implements OnInit {

  constructor() { }

  admissionCode=""

  readValue=()=>{
    let data={
      "admissionCode":this.admissionCode
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
