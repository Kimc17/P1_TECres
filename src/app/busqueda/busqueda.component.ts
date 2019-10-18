import { Component, OnInit, Input } from '@angular/core';
import { PeticionesService } from '../peticiones.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  fotos_principales:Array<any>=[];
  fotos_secundarias:Array<any>=[];
  propiedades:Array<any>=[];
  prueba:string;
  busquedas: any ={
    nombre:'',
    ubicacion:{provincia:'', canton: '', distrito: ''},
    pmin: '',
    pmax: '',
    habitaciones: '',
      
  };
  anuncio:Array<any>;
  constructor(private data:PeticionesService) { 
    this.propiedades = data.getPropiedades();
    this.fotos_principales = data.getPrinFotos();
    
    console.log('LISTO' + typeof(this.fotos_principales[0]));
    
    
  }
  ngOnInit() {
    
  }

  cargar(i:number){ 
    this.get_anuncio(this.propiedades[i].id_propiedad);
  }

  buscar(){
    console.log(this.busquedas);
  } 
  
 
 get_anuncio(id:number){
  this.data.getAnuncio(id).subscribe(datos => this.anuncio= datos);
}

}


  

