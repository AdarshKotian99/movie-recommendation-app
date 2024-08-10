import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { } 

  ngOnInit(): void {
  }

  username1 : string = "";
  password1 : string = "";

  onSubmit(){
    console.log('submit clicked');
  }

}
