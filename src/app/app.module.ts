import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopbarComponent } from './home/topbar/topbar.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { ContainerComponent } from './home/container/container.component';
import { FooterComponent } from './home/footer/footer.component';

import { PubSubModule } from 'angular7-pubsub'; // <= HERE

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CategorieComponent } from './home/categorie/categorie.component';
import { SousCategorieComponent } from './home/sous-categorie/sous-categorie.component';
import { ProduitComponent } from './home/produit/produit.component';
import { ContactComponent } from './home/contact/contact.component';
import { RegisterComponent } from './home/register/register.component';
import { LoginComponent } from './home/login/login.component';
import { PanierComponent } from './home/panier/panier.component';
import { TermesComponent } from './home/termes/termes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopbarComponent,
    SidebarComponent,
    ContainerComponent,
    FooterComponent,
    CategorieComponent,
    SousCategorieComponent,
    ProduitComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    PanierComponent,
    TermesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    PubSubModule.forRoot() // <= AND HERE

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
