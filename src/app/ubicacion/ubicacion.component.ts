import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent implements OnInit {
  editField: string;
  constructor() { }

  ngOnInit() {
  }

  ubicaciones: Array<any> = [

    {Provincia: "San José", Canton: 'Moravia', Distrito:'San Vicente',ID:1},
    {Provincia: "San José", Canton: 'Goicoechea', Distrito:'Guadalupe',ID:2},
  ]
  ubicacionNueva:Array<any>= [{Provincia: "Default", Canton: 'Default', Distrito:'Default',ID:0}]

  eliminar(ID1:any){
    
    for (var indice = 0; indice < this.ubicaciones.length; indice++){
      if(this.ubicaciones[indice].ID == ID1){
        this.ubicaciones.splice(indice, 1);
      }
    }
    
  }

  cambiarValor( event:any){
    this.editField = event.target.textContent;
  }

  actualizarLista( ID1:any, propiedad: any, event: any){

    const editField = event.target.textContent;
    console.log(editField);

    for (var indice = 0; indice < this.ubicaciones.length; indice++){
      if(this.ubicaciones[indice].ID == ID1){
        this.ubicaciones[indice][propiedad] = editField;
        
      }
      this.editField=null;
    }
      
  }

  imprimirLista(){
    for (var indice = 0; indice < this.ubicaciones.length; indice++){
      console.log(this.ubicaciones[indice]);
    }
  }

  agregar(){

    this.imprimirLista();
    this.ubicaciones.push(this.ubicacionNueva[0]);
    this.ubicacionNueva = [{Provincia: "Default", Canton: 'Default', Distrito:'Default',ID:0}];
    this.editField = null;
    

  }

}
