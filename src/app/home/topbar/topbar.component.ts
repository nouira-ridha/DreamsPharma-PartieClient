import {Component, OnInit} from '@angular/core';
import {CategorieService} from '../../services/categorie.service';
import {SecteurService} from '../../services/secteur.service';

import {ActivatedRoute, Router} from '@angular/router';
import {PubSubService} from 'angular7-pubsub';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  categoriesante;
  categoriebeaute;
  categoriemamanbebe;
  categoriecomplimentalimentaire;
  id;
  categorie;
  categories;
  name;
  state;

  constructor(private pubsub: PubSubService,public categorieServices: CategorieService, public secteurServices: SecteurService, private router: ActivatedRoute,private  routes:Router) {

     this.pubsub.$sub('pleaseCloseSidenav').subscribe((from) => {


       this.state=localStorage.getItem("etat")

       console.log("okkkkkkkkkkk"+this.state)
       console.log("okkkkkkkkkkk"+from)

     });

  }

  ngOnInit() {


    console.log('okkkkkk');

    this.getallcategorieSante();
    this.getallcategorieBeaute();
    this.getallcategorieMaman();
    this.getallcategorieCompliment();
    this.getAllCategorie();
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

  logout(){

      this.routes.navigate(['home/login']);
    localStorage.setItem("etat","0")

  }

  detailcategorie(id) {
    console.log(id);

    this.categorieServices.detailcategorie(id).subscribe(res => {


      console.log('okkkkkk');


    });

  }
  getAllCategorie() {

    this.categorieServices.getAllCategorie().subscribe(res => {
      this.categories = res;
    });
  }

  gosubCategorie(id){
    window.location.href='/home/categorie/'+id


    //this.routes.navigate(['/home/categorie/'+id])

  }
  goregister(id){
    window.location.href='/home/register/'

  }
  gologin(id){
    window.location.href='/home/login/'

  }
  gopanier(){
    window.location.href='/home/panier/'

  }
}
