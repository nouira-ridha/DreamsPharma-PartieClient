import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { ActivatedRoute } from '@angular/router'
import swal from 'SweetAlert';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private router:ActivatedRoute) { }

  ngOnInit() {
  }
  envoiMail(){

    swal({
      title: "Succés?",
      text: "Votre message a été envoye avec succès",
      icon: "success",
      dangerMode: true,
    })

  }
}
