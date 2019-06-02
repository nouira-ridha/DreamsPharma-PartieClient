import { Component, OnInit } from '@angular/core';
import {SecteurService} from '../../services/secteur.service';
import {CategorieService} from '../../services/categorie.service';
import {SouscategorieService} from '../../services/souscategorie.service';
import {ProduitService} from '../../services/produit.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PubSubService} from 'angular7-pubsub';
import swal from 'SweetAlert';
@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  categoriesante;
  categoriebeaute;
  categoriemamanbebe;
  categoriecomplimentalimentaire;
  produits=[];
  list=[];
  id;


  constructor(public secteurServices: SecteurService, public categorieServices: CategorieService, public souscategorieServices: SouscategorieService, public produitServices: ProduitService, private router: ActivatedRoute, private  routes: Router) {

    console.log("list : ",JSON.parse(localStorage.getItem("list")))

     this.list=JSON.parse(localStorage.getItem("list"));

    for(var i=0;i<this.list.length;i++){

       console.log("id : ",this.list[i])
      this.detailproduit(this.list[i])
    }
  }


  ngOnInit() {


    this.getallcategorieSante();
    this.getallcategorieBeaute();
    this.getallcategorieMaman();
    this.getallcategorieCompliment();


    ///this.detailproduit(this.id)
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

  gosubCategorie(id) {
    window.location.href = '/home/categorie/' + id


  }
  detailproduit(id){


    this.produitServices.detailproduit(id).subscribe(res=>{
      console.log('okkkkkk' ,res);


      this.produits.push(res);


    })

  }
  paiement(){

    swal({
      title: "Succés?",
      text: "Succès de paiement",
      icon: "success",
      dangerMode: true,
    })

  }
  gohome(){
    window.location.href='/home/'


  }
}
