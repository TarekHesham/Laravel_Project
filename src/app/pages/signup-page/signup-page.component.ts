import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ReactiveFormsModule, FormControl, FormGroup, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent {
  signupForm = new FormGroup({
    role: new FormControl('candidate', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required, this.confirmPasswordValidator()]),
  });

  get name() {
    return this.signupForm.controls['name'];    
  }
  get email() {
    return this.signupForm.controls['email'];    
  }
  get password() {
    return this.signupForm.controls['password'];
  }
  get confirmPassword() {
    return this.signupForm.controls['confirmPassword'];
  }
  get role() {
    return this.signupForm.controls['role'];
  }
  confirmPasswordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null;
      }
      return value != this.password.value ? {notMatching: true} : null;
    };
  }


  submit() {
    this.signupForm.markAllAsTouched();
    if (this.name.errors || this.email.errors || this.password.errors || this.confirmPassword.errors || this.role.errors) {
      return;
    }
    console.log("submit", this.signupForm.value);
  }
  visited(control: AbstractControl): boolean {
    return control.touched || control.dirty;
  }
}
