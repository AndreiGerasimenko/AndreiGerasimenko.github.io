import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILoginData } from '../interfaces/interfaces';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  myForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private loginService: LoginServiceService,
    private router: Router
  ) {
    this.myForm = this.formBuilder.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
   }

   getControl(controlName: string): FormControl {
     return this.myForm.controls[controlName] as FormControl
   }

   onsubmit() {
     const isFormValid = this.myForm.valid
     if(!isFormValid) return

     const loginData: ILoginData = {
       password: this.getControl('password').value,
       login: this.getControl('login').value
     }

     const loginResult = this.loginService.logIn(loginData)

     if(loginResult === 'success') {
      this.router.navigate(['/home'])
     } else {
       this.myForm.setErrors({
         invalidLoginData: true
       })
     }

   }
}
