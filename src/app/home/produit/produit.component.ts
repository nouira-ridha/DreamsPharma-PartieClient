import { Component, OnInit } from '@angular/core';
import {SouscategorieService} from '../../services/souscategorie.service';
import {ProduitService} from '../../services/produit.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PubSubService} from 'angular7-pubsub';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  id;
  souscategorie;
  produits;
  produit;
  photos;
  constructor(public souscategorieServices: SouscategorieService, public produitServices: ProduitService, private router: ActivatedRoute,private  routes:ActivatedRoute) {



      this.id = this.routes.snapshot.params['id'];







  }

  ngOnInit() {
    console.log('okkkkkk'+this.id);
    this.getAllProduits();
    this.detailproduit(this.id);
    this.detailsouscategorie(this.id);
    this.getAllPhotos(this.id)


  }
  detailproduit(id){


    this.produitServices.detailproduit(id).subscribe(res=>{
      console.log('okkkkkk' ,res);


      this.produit=res;


    })

  }

  getAllPhotos(id){


    this.produitServices.getAllPhotos(id).subscribe(res=>{
      console.log('okkkkkk' ,res);


      this.photos=res;


    })

  }
  getAllProduits() {

    this.produitServices.getAllProduits().subscribe(res => {
      this.produits = res;
    });
  }
  detailsouscategorie(id){


    this.souscategorieServices.detailsouscategorie(id).subscribe(res=>{
      console.log('okkkkkk' ,res);


      this.souscategorie=res;


    })

  }
  gosubPanier(id){



   var list=JSON.parse(localStorage.getItem("list"));

    list.push(id)

    localStorage.setItem("list",JSON.stringify(list));

    console.log(JSON.parse(localStorage.getItem("list")))
  ///  window.location.href='/home/panier/'+id


  }
}
