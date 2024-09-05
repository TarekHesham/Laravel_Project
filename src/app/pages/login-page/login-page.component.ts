import { Component, input } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    rememberMe: new FormControl(false),
  });


  get email() {
    return this.loginForm.controls['email'];    
  }
  get password() {
    return this.loginForm.controls['password'];
  }

  submit() {
    this.loginForm.markAllAsTouched();
    if (this.email.errors) {
      return;
    }
    if (this.password.errors) {
      return;
    }
    console.log("submit", this.loginForm.value);
  }
  visited(control: AbstractControl): boolean {
    return control.touched || control.dirty;
  }
}
