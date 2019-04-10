import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  submitted: boolean = false;
  
  invalidLogin: boolean = false;
  constructor(private formBuilder: FormBuilder,
              private router: Router) { }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return true;
    }
    let username = this.loginForm.controls.email.value;
    if (this.loginForm.controls.email.value == "admin@gmail.com" &&
      this.loginForm.controls.password.value == "123") {
      localStorage.setItem("username", username);
      this.router.navigate(['product-list']);
    }
    else {
      this.invalidLogin = true;
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
