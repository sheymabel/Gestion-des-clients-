import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { HeroComponent } from './hero/hero.component';

import { ClienteService } from './clientes/cliente.service';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './clientes/form.component';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscrireComponent } from './inscrire/inscrire.component';
//import { LoginComponent } from './login/login.component';
//import { LconctionComponent } from './lconction/lconction.component';
//import { ConnectionComponent } from './connection/connection.component';
//import { AuthComponent } from './auth/auth.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    HeroComponent,
    HomeComponent,
    FormComponent,
    ConnexionComponent,
    InscrireComponent,
    //LoginComponent,
    //LconctionComponent,
    //ConnectionComponent,
    //AuthComponent
  ],
  imports: [
    BrowserModule,
   // RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
