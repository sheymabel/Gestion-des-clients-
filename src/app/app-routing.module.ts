import { NgModule } from "@angular/core"; 
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

import { ConnexionComponent } from './connexion/connexion.component';
import { InscrireComponent } from "./inscrire/inscrire.component";

const appRoute: Routes =[
    /*{path:'', redirectTo:'/clientes', pathMatch: 'full'},*/
    {path:'',component:HomeComponent},
    {path:'clientes',component:ClientesComponent},
    {path:'clientes/:id',component:FormComponent},
    {path:'connexion', component:ConnexionComponent},
    {path:'inscrire', component:InscrireComponent},
    {path:'hero', component:HeroComponent}
  ]


@NgModule({
imports:[
    RouterModule.forRoot(appRoute)],
    exports:[RouterModule]
})
export class AppRoutingModule{ 

}