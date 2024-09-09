import { Component, input } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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

  constructor(private authService: AuthService,
    private router: Router
  ) {}
  errorMessages = null;
  get email() {
    return this.loginForm.controls['email'];    
  }
  get password() {
    return this.loginForm.controls['password'];
  }

  submit() {
    this.loginForm.markAllAsTouched();
    if (this.email.errors || this.password.errors) {
      return;
    }
    console.log("submit", this.loginForm.value);
    // call api
    this.authService.login(this.loginForm.value)
    .subscribe(
      (response) => {
        console.log('Login successful:', response);

        localStorage.setItem('token', `${response.token_type} ${response.access_token}`);
        this.router.navigate(['job-details']);
      },
      (error) => {
        // errors handler
        console.error('Login failed:', error);
        this.errorMessages = error.error.message || 'Login failed';
      }
    );
  }
  visited(control: AbstractControl): boolean {
    return control.touched || control.dirty;
  }
}
