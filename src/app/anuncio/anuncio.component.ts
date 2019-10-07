import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit {
  editField: string;
  public valorBusqueda:string;
  constructor() { }

  ngOnInit() {
  }
  
  anuncios: Array<any> = [

    {Modalidad: "01-20-2019", TarjetaCredito: '123', FechaInicio:'30/9/19',Visitas:2,FechaFin:'31/9/19', Titulo:'Hola',VendedorAsig:'sdf',IDCreador:123,AprobadoPorAdmin:10123123,Publico:'Si',Tipo:123},
    {Modalidad: "01-20-2019", TarjetaCredito: '345', FechaInicio:'asd2',Visitas:4,FechaFin:123, Titulo:'Adios',VendedorAsig:'Juan',IDCreador:123,AprobadoPorAdmin:10123123,Publico:'No',Tipo:123}
  ]

  anuncioNuevo:Array<any>= [ {Modalidad: "Default", TarjetaCredito: '0000', FechaInicio:'0/0/0',Visitas:0,FechaFin:'0/0/0', Titulo:'Default',VendedorAsig:'Default',IDCreador:0,AprobadoPorAdmin:10123123,Publico:'Default',Tipo:"Default"}]

  eliminar(cedula1:any){
    
    for (var indice = 0; indice < this.anuncios.length; indice++){
      if(this.anuncios[indice].Titulo == cedula1){
        this.anuncios.splice(indice, 1);
      }
    }
    
  }

  cambiarValor( event:any){
    this.editField = event.target.textContent;
  }

  actualizarLista( cedula1:any, propiedad: any, event: any){

    const editField = event.target.textContent;
    console.log(editField);

    for (var indice = 0; indice < this.anuncios.length; indice++){
      if(this.anuncios[indice].cedula == cedula1){
        this.anuncios[indice][propiedad] = editField;
        
      }
      this.editField=null;
    }
      
  }

  imprimirLista(){
    for (var indice = 0; indice < this.anuncios.length; indice++){
      console.log(this.anuncios[indice]);
    }
  }

  agregar(){

    this.imprimirLista();
    this.anuncios.push(this.anuncioNuevo[0]);
    this.anuncioNuevo = [{Modalidad: "Default", TarjetaCredito: 'Default', FechaInicio:'0/0/0',Visitas:0,FechaFin:'0/0/0', Titulo:'Default',VendedorAsig:'Default',IDCreador:0,AprobadoPorAdmin:10123123,Publico:'Default',Tipo:"Default"}];
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

  aprobar(titulo1:any){

    for (var indice = 0; indice < this.anuncios.length; indice++){
      if(this.anuncios[indice].Titulo == titulo1){
        this.anuncios[indice].Publico = 'Sí';
      }
      
    }

  }

}
