import { Component, OnInit } from '@angular/core';
import { print } from 'util';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})



export class VendedorComponent implements OnInit {
  editField: string;
  public valorBusqueda:string;
  private newAttribute: any = {};
  constructor() { }

  ngOnInit() {
  }
//https://www.youtube.com/watch?v=Pds_3UZPmuQ
  vendedores: Array<any> = [

    {FechaIngreso: "01-20-2019", Nombre: 'asd', Apellido1:'asd',Apellido2:'asd',cedula:123},
    {FechaIngreso: '30/20/2019', Nombre: 'asd', Apellido1:'asd',Apellido2:'asd',cedula:123444},
    {FechaIngreso: '30/20/2019', Nombre: 'asd', Apellido1:'asd',Apellido2:'asd',cedula:987}
  ]

  vendedorNuevo:Array<any>= [{FechaIngreso:'0/0/0', Nombre: 'Default', Apellido1:'Default',Apellido2:'Default',cedula:0}]

  eliminar(cedula1:any){
    
    for (var indice = 0; indice < this.vendedores.length; indice++){
      if(this.vendedores[indice].cedula == cedula1){
        this.vendedores.splice(indice, 1);
      }
    }
    
  }

  cambiarValor( event:any){
    this.editField = event.target.textContent;
  }

  actualizarLista( cedula1:any, propiedad: any, event: any){

    const editField = event.target.textContent;
    console.log(editField);

    for (var indice = 0; indice < this.vendedores.length; indice++){
      if(this.vendedores[indice].cedula == cedula1){
        this.vendedores[indice][propiedad] = editField;
        
      }
      this.editField=null;
    }
      
  }

  imprimirLista(){
    for (var indice = 0; indice < this.vendedores.length; indice++){
      console.log(this.vendedores[indice]);
    }
  }

  agregar(){

    this.imprimirLista();
    this.vendedores.push(this.vendedorNuevo[0]);
    this.vendedorNuevo = [{FechaIngreso:'Default', Nombre: 'Default', Apellido1:'Default',Apellido2:'Default',cedula:0}];
    this.editField = null;
    

  }

  buscar(tipo1:any,id1:any){
    this.valorBusqueda = (<HTMLInputElement>document.getElementById(tipo1)).value;
    const elemento = (<HTMLInputElement>document.getElementById(id1));

    console.log(this.valorBusqueda);
    if(elemento==null){
      (<HTMLInputElement>document.getElementById(tipo1)).scrollIntoView({behavior: 'smooth'});
    }
    else{
      (<HTMLInputElement>document.getElementById(id1)).scrollIntoView({behavior: 'smooth'});
    }
    return this.valorBusqueda;

  }

}

