import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  gopanier(){
    window.location.href='/home/panier/'

  }
  goNous(){
    window.location.href='/home/contact/'

  }
  goTermes(){
    window.location.href='/home/termes/'

  }
}
