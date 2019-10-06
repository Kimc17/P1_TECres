import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  propiedades:Array<any>=[
    { titulo: 'Casa grande', foto:'https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_960_720.jpg', ubicacion: 'Sus sueños', precio: '$70000'},
    { titulo: 'Apartamento individual', foto:'https://cdn.pixabay.com/photo/2016/09/22/11/55/kitchen-1687121__340.jpg', ubicacion: 'TEC', precio: '$600'},
    { titulo: 'Casa pequeña', foto:'https://cdn.pixabay.com/photo/2013/08/30/12/56/holiday-house-177401__340.jpg',ubicacion: 'al frente', precio: '$900'},
    { titulo: 'Habitación compartida', foto:'https://cdn.pixabay.com/photo/2015/03/26/09/42/bedroom-690129__340.jpg', ubicacion: 'Cerca del TEC', precio: '$200'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
