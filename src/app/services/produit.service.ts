import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(public http: HttpClient) {
  }

  getAllProduits() {

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': localStorage.getItem('token')
    });


    return this.http.get(environment.base + 'produit/all', {headers: httpHeaders});
  }


  detailproduit(id) {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': localStorage.getItem('token')
    });
    return this.http.get(environment.base + 'produit/byid?produitId=' + id, {headers: httpHeaders});
  }

  getImage(imageUrl: string): Observable<Blob> {
    return this.http.get(imageUrl, {responseType: 'blob'});
  }

  getbyid(souscategorie) {

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': localStorage.getItem('token')
    });


    return this.http.get(environment.base + 'produit/byid/' +  souscategorie, {headers: httpHeaders});
  }
  getAllPhotos(id) {

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': localStorage.getItem('token')
    });


    return this.http.get(environment.base + 'produit/byidgalerie?produitId=' +  id, {headers: httpHeaders});
  }

  uploadImage(file){


    const formData: FormData = new FormData();
    formData.append("file",file)
    formData.append("nom",file.name)

    return this.http.post(environment.base + 'galerie/add',formData);
  }
}
