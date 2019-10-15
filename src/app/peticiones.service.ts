import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {headers: new HttpHeaders({
  'Content-Type': 'application/json'
})};

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {
  propiedades:Array<any>=[]; 
  fotos_principales:Array<any>=[];
  fotos_secundarias:Array<any>=[];
   temp;

 
  appUrlGeneral = 'http://25.20.211.86:5467/api';
  appUrlCliente = 'http://25.20.211.86:5466/api' 
  
  constructor(private _http: HttpClient) {
    
   }


  setPropiedades(){
    this.getAnuncios().subscribe(datos => this.propiedades= datos);
    this. setPrinFotos();
 }
  getPropiedades(){
    return this.propiedades;
  }

  setPrinFotos(){
    for (var i = 0; i < this.propiedades.length; i++) {
      
      this.getFotoP(this.propiedades[i].foto_principal).subscribe(datos => this.temp= datos);
      this.fotos_principales.push(this.temp);
      console.log('iniciando iteracion' + this.temp);
  }
  console.log('Se ha obtenido el valor de ' + this.fotos_principales.length);

  } 
  getPrinFotos(){
      return this.fotos_principales;
  }
 
  getAnuncios(){
    return this._http.get<void[]>(this.appUrlGeneral+'/Anuncios');
  }
  getAnuncio(id_propiedad: number){
    return this._http.get<void[]>(this.appUrlGeneral+'/Anuncios/' +id_propiedad);
  }
   getCantones(provincia:string ){
    return this._http.get<void[]>(this.appUrlGeneral+'/Ubicacion/?Provincia='+provincia);
  }
  getFCantones(provincia:string ){
    return this._http.get<void[]>(this.appUrlGeneral+'/Ubicacion/?Provincia='+provincia);
  }
  getDistritos(provincia:string,  canton:string){
    return this._http.get<void[]>(this.appUrlGeneral+'/Ubicacion/?Provincia='+provincia+'&Canton='+canton );
  }
  getFotoP(url:string){
    return this._http.get<void[]>(this.appUrlGeneral+'/Image/?Rute='+url );
  }
 
  getGentilicios(){
    return this._http.get<void[]>(this.appUrlCliente+'/Nacionalidad' );
  }

  getPerfiles(){
    return this._http.get<void[]>(this.appUrlCliente+'/Perfil_cliente');
  }
  getOcupaciones(){
    return this._http.get<void[]>(this.appUrlGeneral+'/Ocupacion');
  }
  getProvincias(){
    return this._http.get<void[]>(this.appUrlGeneral+'/Ubicacion');
  }
 
  addCliente(usuarios:void){
    return this._http.post<any>(this.appUrlCliente+'/Cliente',usuarios)
 }
  addInteresado(usuarios:void){
      return this._http.post<any>(this.appUrlGeneral+'/Interesado',usuarios)
  }

  getUser(){
    return this._http.get<void[]>(this.appUrlGeneral);
  }
  
  addUser(usuarios:void){
    return this._http.post<any>(this.appUrlGeneral,usuarios)
  }
  updateUser(usuarios:any,id){
    return this._http.put<any>(this.appUrlGeneral+"/"+id.toString(), usuarios, httpOptions)
  }
}
