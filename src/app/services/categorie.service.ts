import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(public http: HttpClient) {

  }

  getAllCategorie() {

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': localStorage.getItem('token')
    });


    return this.http.get(environment.base + 'categorie/all', {headers: httpHeaders});
  }

  getbyidCategorie(secteur) {

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': localStorage.getItem('token')
    });


    return this.http.get(environment.base + 'categorie/byidcategorie/' +  secteur, {headers: httpHeaders});
  }

  detailcategorie(id) {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': localStorage.getItem('token')
    });
    return this.http.get(environment.base + 'categorie/byidtopbar?categorieId=' + id, {headers: httpHeaders});
  }


}
