import { Component, OnInit } from '@angular/core';
import {CategorieService} from '../../services/categorie.service';
import {SouscategorieService} from '../../services/souscategorie.service';
import {SecteurService} from '../../services/secteur.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PubSubService} from 'angular7-pubsub';



@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  categoriesante;
  categoriebeaute;
  categoriemamanbebe;
  categoriecomplimentalimentaire;
  id;
  categorie;
  categories;
  souscategorie;
  produit;


  constructor(public categorieServices: CategorieService,public souscategorieServices: SouscategorieService, public secteurServices: SecteurService, private router: ActivatedRoute,private  routes:Router) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.id = params['id'];
    });

    this.detailcategorie(this.id);

    console.log('okkkkkk');

    this.getallcategorieSante();
    this.getallcategorieBeaute();
    this.getallcategorieMaman();
    this.getallcategorieCompliment();
    this.getAllCategorie();
    this.getAllSouscategorie();

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

  detailcategorie(id){


    this.categorieServices.detailcategorie(id).subscribe(res=>{
      console.log('okkkkkk' ,res);


      this.categorie=res;


    })

  }
  getAllCategorie() {

    this.categorieServices.getAllCategorie().subscribe(res => {

      this.categories = res;
    });
  }

  getAllSouscategorie() {

    this.categorieServices.getAllCategorie().subscribe(res => {
      this.souscategorie = res;
    });
  }

  gosubCategorie(id){
    window.location.href='/home/categorie/'+id


  }

  gosubSouscategorie(id){

    console.log(id)
    window.location.href='/home/sous-categorie/'+id


  }

}
