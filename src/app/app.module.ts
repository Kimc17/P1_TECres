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


const routes: Routes = [
  {path: 'admin', component: AdministradorComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signin/cliente', component: ClienteComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'busqueda', component: BusquedaComponent},
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
