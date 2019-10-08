import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {FormsModule} from '@angular/forms';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { ClienteComponent } from './cliente/cliente.component';
import { SigninComponent } from './signin/signin.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { VendedorComponent } from './vendedor/vendedor.component';
import { InmuebleComponent } from './inmueble/inmueble.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { TipoAnuncioComponent } from './tipo-anuncio/tipo-anuncio.component';
import { PerfilClienteComponent } from './perfil-cliente/perfil-cliente.component';
import { OcupacionComponent } from './ocupacion/ocupacion.component';
import { PadministradoresComponent } from './padministradores/padministradores.component';
import { AnuncioComponent } from './anuncio/anuncio.component';
<<<<<<< HEAD
=======
import { EstadisticaComponent } from './estadistica/estadistica.component';
import { FacturacionComponent } from './facturacion/facturacion.component';
>>>>>>> fb68eb80e1c9a9d4a19255c2d8db446beef321f3

const routes: Routes = [
  {path: 'admin', component: AdministradorComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signin/cliente', component: ClienteComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'busqueda', component: BusquedaComponent},
  {path: 'anuncio', component: AnuncioComponent},
  {path: 'Vendedor', component: VendedorComponent},
  {path: 'Inmueble', component: InmuebleComponent},
  {path: 'Ubicacion', component: UbicacionComponent},
  {path: 'Anuncio', component:TipoAnuncioComponent},
  {path: 'Perfil/Cliente', component:PerfilClienteComponent},
  {path: 'Ocupacion', component: OcupacionComponent},
  {path: 'Administrador',component:PadministradoresComponent},
  {path: 'Aprobar/Anuncio',component:AnuncioComponent},
  {path: 'Estadística', component:EstadisticaComponent},
  {path: 'Facturación', component:FacturacionComponent},
  {path:'',component: InicioComponent, pathMatch: 'full'},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
  


 

];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdministradorComponent,
    InicioComponent,
    LoginComponent,
    ClienteComponent,
    SigninComponent,
    BusquedaComponent,
    VendedorComponent,
    InmuebleComponent,
    UbicacionComponent,
    TipoAnuncioComponent,
    PerfilClienteComponent,
    OcupacionComponent,
    PadministradoresComponent,
    AnuncioComponent,
<<<<<<< HEAD
=======
    EstadisticaComponent,
    FacturacionComponent,
>>>>>>> fb68eb80e1c9a9d4a19255c2d8db446beef321f3

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
