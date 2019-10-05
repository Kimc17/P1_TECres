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
        provincia: 'Molecule Man',
        canton: 29,    
    },
      
  };
  vendedor: any ={
    nombre:'',
    nacimiento: '',
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
      nacimiento: '',
    };
    console.log(this.vendedor);
  }
  
s
}
