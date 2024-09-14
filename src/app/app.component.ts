import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { LoaderComponent } from './components/loader/loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, JobDetailsComponent, ReactiveFormsModule, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'laravel_project';
  user!:any;

  constructor(private authService: AuthService) {
    this.authService.userData$.subscribe((userData) => this.user = userData);
  }

}
