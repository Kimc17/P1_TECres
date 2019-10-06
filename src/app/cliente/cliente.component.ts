import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})

export class ClienteComponent implements OnInit {
  show1: boolean = true;
  show2: boolean = false;
  show3: boolean = false;
  
  pruebas:Array<any>=[
    { nombre: 'Kimberly', genero:'mujer', nacimiento: '13/09/1999', residencia: 'su casa'},
    { nombre: 'Cristhofer', genero:'hombre', nacimiento: '06/02/1999', residencia: 'resi'},
    { nombre: 'Brayan', genero:'hombre', nacimiento: '99/99/1999', residencia: 'Coronado'},
    { nombre: 'Edgar', genero:'hombre', nacimiento: '13/99/1999', residencia: 'La nave'},
  ];
  
  constructor() { }

  ngOnInit() {
  }
  

}
