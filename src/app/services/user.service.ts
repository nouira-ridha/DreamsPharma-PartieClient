import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }
  ajout( nom, prenom, email, password,phone, adresse, etat, ) {

           console.log({
             nom: nom,
             prenom: prenom,
             email: email,
             password: password,
             phone:phone,
             adresse: adresse,
             etat: etat,
            // listproduit: listproduit,

           })
    return this.http.post(environment.base + 'user/add', {
      nom: nom,
      prenom: prenom,
      email: email,
      password: password,
      phone:phone,
      adresse: adresse,
      etat: etat,
      //listproduit: listproduit,

    });

  }


  remove(id) {

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': localStorage.getItem("token")
    });
    return this.http.delete(environment.base + 'user/delt/'+id,{ headers: httpHeaders });
  }



  getAllClients() {

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': localStorage.getItem("token")
    });


    return this.http.get(environment.base + 'user/all',{ headers: httpHeaders });
  }

  loginuser(email, pwd) {


    return this.http.post(environment.base + 'user/loginuser', {email: email, password: pwd});

  }

}
