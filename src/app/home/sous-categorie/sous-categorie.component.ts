import { Component, OnInit } from '@angular/core';
import {SecteurService} from '../../services/secteur.service';
import {CategorieService} from '../../services/categorie.service';
import {SouscategorieService} from '../../services/souscategorie.service';
import {ProduitService} from '../../services/produit.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PubSubService} from 'angular7-pubsub';

@Component({
  selector: 'app-sous-categorie',
  templateUrl: './sous-categorie.component.html',
  styleUrls: ['./sous-categorie.component.css']
})
export class SousCategorieComponent implements OnInit {
  categoriesante;
  categoriebeaute;
  categoriemamanbebe;
  categoriecomplimentalimentaire;
  id;
  souscategorie;
  souscategories;
  produits;
  constructor(public secteurServices: SecteurService,public categorieServices: CategorieService,public souscategorieServices: SouscategorieService, public produitServices: ProduitService, private router: ActivatedRoute,private  routes:Router) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.id = params['id'];
    });

    this.detailsouscategorie(this.id);
    console.log('okkkkkk');

    this.getallcategorieSante();
    this.getallcategorieBeaute();
    this.getallcategorieMaman();
    this.getallcategorieCompliment();
    this.getAllSouscategorie();
    this.getAllProduits();

  }

  getallcategorieSante() {
    this.secteurServices.getAllcategorieBysecteur('santé').subscribe(res => {

      console.log('santé', res);
      this.categoriesante = res;


    }, error2 => {

      console.log('okkk erreur' + error2);
    });

  }
  getallcategorieBeaute() {
    this.secteurServices.getAllcategorieBysecteur('beauté').subscribe(res => {

      console.log('beauté', res);
      this.categoriebeaute = res;


    }, error2 => {

      console.log('okkk erreur' + error2);
    });

  }
  getallcategorieMaman() {
    this.secteurServices.getAllcategorieBysecteur('maman-bébé').subscribe(res => {

      console.log('maman-bébé', res);
      this.categoriemamanbebe = res;


    }, error2 => {

      console.log('okkk erreur' + error2);
    });

  }
  getallcategorieCompliment() {
    this.secteurServices.getAllcategorieBysecteur('compliment alimentaire').subscribe(res => {

      console.log('compliment alimentaire', res);
      this.categoriecomplimentalimentaire = res;


    }, error2 => {

      console.log('okkk erreur' + error2);
    });

  }
  detailsouscategorie(id){


    this.souscategorieServices.detailsouscategorie(id).subscribe(res=>{
      console.log('okkkkkk' ,res);


      this.souscategorie=res;


    })

  }
  getAllSouscategorie() {

    this.souscategorieServices.getAllSouscategorie().subscribe(res => {

      this.souscategories = res;
    });
  }

  getAllProduits() {

    this.produitServices.getAllProduits().subscribe(res => {
      this.produits = res;
    });
  }

  gosubSouscategorie(id){
    window.location.href='/home/sous-categorie/'+id


  }
  gosubCategorie(id){
    window.location.href='/home/categorie/'+id


  }
  gosubProduit(id){
    window.location.href='/home/produit/'+id


  }
}
