import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {LoginObject} from "../../shared/login-object.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public submitted: Boolean = false;
  public error: {code: number, message: string } = null;

  constructor( private formBuilder: FormBuilder,  
                public routes:Router) { }

  ngOnInit() {
     this.loginForm = this.formBuilder.group({
       username: ['', Validators.required],
       password: ['', Validators.required],
     }) 
  }

  public login() {
    this.submitted = true;
    this.error = null;
    new LoginObject(this.loginForm.value)
    this.routes.navigate(['/home']);
  }

}
