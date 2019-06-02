import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  user;



  constructor(public userService: UserService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getAllClients();
    this.registerForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      phone: ['',],
      adresse: ['', Validators.required],
      etat: ['0'],
     // listproduit: [''],

    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit(tab) {

    console.log('data', this.registerForm.value);

    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }


    console.log(tab);
    this.userService.ajout(this.registerForm.get('nom').value, this.registerForm.get('prenom').value, this.registerForm.get('email').value,
      this.registerForm.get('password').value, this.registerForm.get('phone').value, this.registerForm.get('adresse').value,
      this.registerForm.get('etat').value).subscribe(res => {
      console.log('goood' + res);

      this.getAllClients();
    });


  }
  getAllClients() {


    this.userService.getAllClients().subscribe(res => {

      this.user = res;
    });
  }
  gologin(){

    window.location.href='/home/login/'


  }

}
