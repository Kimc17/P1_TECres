import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit {
  activado: boolean = false;
  mensaje: any={emisor: '',receptor: '', contenido:''};

  propiedades=  JSON.parse(localStorage.getItem("data"));
  
  
  constructor() {
    
   }

   enviar(){
    console.log(this.mensaje);
   }

   

  ngOnInit() {
  }
  
}
