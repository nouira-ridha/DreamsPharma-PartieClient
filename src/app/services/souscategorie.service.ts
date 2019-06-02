import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SouscategorieService {

  constructor(public http: HttpClient) {

  }


  getAllSouscategorie() {

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': localStorage.getItem('token')
    });


    return this.http.get(environment.base + 'souscategorie/all', {headers: httpHeaders});
  }


  getbyidSouscategorie(categorie) {

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': localStorage.getItem('token')
    });


    return this.http.get(environment.base + 'souscategorie/byidsouscategorie/' + categorie, {headers: httpHeaders});
  }

  getallSouscategorie1(idcat) {

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': localStorage.getItem('token')
    });


    return this.http.get(environment.base + 'souscategorie/allsouscategorie/' + idcat, {headers: httpHeaders});
  }

  detailsouscategorie(id) {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': localStorage.getItem('token')
    });
    return this.http.get(environment.base + 'souscategorie/byidsous?souscategorieId=' + id, {headers: httpHeaders});
  }
}
