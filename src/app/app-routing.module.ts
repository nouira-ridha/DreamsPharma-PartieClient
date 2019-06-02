import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { ContainerComponent } from './home/container/container.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {CategorieComponent} from './home/categorie/categorie.component';
import {SousCategorieComponent} from './home/sous-categorie/sous-categorie.component';
import {ProduitComponent} from './home/produit/produit.component';
import {PanierComponent} from './home/panier/panier.component';
import {ContactComponent} from './home/contact/contact.component';
import {RegisterComponent} from './home/register/register.component';
import {LoginComponent} from './home/login/login.component';
import { TermesComponent } from './home/termes/termes.component';



import {Register} from 'ts-node';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent, children:[
      {path:'', component: ContainerComponent},
      {path: 'categorie/:id' , component: CategorieComponent},
      {path: 'sous-categorie/:id', component: SousCategorieComponent},
      {path: 'produit/:id', component: ProduitComponent},
      {path: 'panier', component: PanierComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent},
      {path: 'termes', component: TermesComponent},


    ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserModule,ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }



