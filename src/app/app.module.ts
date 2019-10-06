import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { ClienteComponent } from './cliente/cliente.component';
import { SigninComponent } from './signin/signin.component';
import { VendedorComponent } from './vendedor/vendedor.component';
import { InmuebleComponent } from './inmueble/inmueble.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { TipoAnuncioComponent } from './tipo-anuncio/tipo-anuncio.component';
import { PerfilClienteComponent } from './perfil-cliente/perfil-cliente.component';
import { OcupacionComponent } from './ocupacion/ocupacion.component';
import { PadministradoresComponent } from './padministradores/padministradores.component';


const routes: Routes = [
  {path: 'admin', component: AdministradorComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signin/cliente', component: ClienteComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'Vendedor', component: VendedorComponent},
  {path: 'Inmueble', component: InmuebleComponent},
  {path: 'Ubicacion', component: UbicacionComponent},
  {path: 'Anuncio', component:TipoAnuncioComponent},
  {path: 'Perfil/Cliente', component:PerfilClienteComponent},
  {path: 'Ocupacion', component: OcupacionComponent},
  {path: 'Administrador',component:PadministradoresComponent},
  {path:'',component: InicioComponent, pathMatch: 'full'},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
  


 

];
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AdministradorComponent,
    InicioComponent,
    LoginComponent,
    ClienteComponent,
    SigninComponent,
    VendedorComponent,
    InmuebleComponent,
    UbicacionComponent,
    TipoAnuncioComponent,
    PerfilClienteComponent,
    OcupacionComponent,
    PadministradoresComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
