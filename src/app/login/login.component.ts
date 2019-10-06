import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  show: boolean = true;
 
  comprador: any ={
    nombre:'',
    genero:'',
    nacimiento: '',
    ingresos: '',
    ocupacion: '',
    residencia: {
        provincia: '',
        canton: '',    
    },
      
  };
  vendedor: any ={
    nombre:'',
    cedula: '',
    email:'',
    contrasena: '',
    usuario:'',
    perfil:'',
  };
  constructor() { }

  ngOnInit() {
  }

  agregar_comprador(){
    console.log(this.comprador);
    
    this.comprador={
      nombre:'',
      genero:'',
      nacimiento: '',
      ingresos: '',
      ocupacion: '',
      residencia: {
          provincia: '',
          canton: '',  
          distrito: '',  
      },
          

    }
  
    
  }
  agregar_vendedor(){
    console.log(this.vendedor);
    
    this.vendedor={
      nombre:'',
      cedula: '',
      email:'',
      contrasena: '',
      usuario:'',
      perfil:'',
    }
  }
  
s
}
