import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../peticiones.service';


@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit {
  activado: boolean = false;
  mensaje: any={emisor: '',receptor: '', contenido:''};

  
  
  
  constructor(private data:PeticionesService) {
    
   }

   enviar(){
    console.log(this.mensaje);
   }

  ngOnInit() {
  }


}
