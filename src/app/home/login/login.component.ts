import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {PubSubService} from 'angular7-pubsub';
import swal from 'SweetAlert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email;
  password;

  constructor(public router: Router, public userService: UserService,private pubsub: PubSubService) { }

  ngOnInit() {
  }


   login(){
     swal({
       title: "Bienvenue?",
       text: "Vous ète maintenant connecter",
       icon: "success",
     })
     this.pubsub.$pub('pleaseCloseSidenav', 'login');

     localStorage.setItem("etat","1")

   }

  goregister(){

    window.location.href='/home/register/'


  }

 /* gouser() {


    this.userService.loginuser(this.email, this.password).subscribe(res => {




      if (JSON.parse(JSON.stringify(res)).auth) {
        localStorage.setItem('state', '1');
        localStorage.setItem('token', JSON.parse(JSON.stringify(res)).token);
        this.router.navigate(['']);
      } else {

        swal("Oops!", "Something went wrong!", "error");
      }

    });


  }*/

}
