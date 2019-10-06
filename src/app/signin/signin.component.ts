import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  nuevo: any ={
    email:'',
    contrasena: '',
  };
  constructor() { }

  ngOnInit() {
  }
  entrar(){
    console.log(this.nuevo);
    this.nuevo ={
      email:'',
      contrasena: '',
    }
  }

}
