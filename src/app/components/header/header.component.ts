import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  user?:User;
  constructor(private authService: AuthService
  ) {}
  ngOnInit() {
    this.authService.getUser().subscribe(
      (response) => {
        this.user = response;
      },
      (error) => {

      }
    );
  }
  logout() {
    this.authService.logout().subscribe(
      (response) => {
        location.reload();
      },
      (error) => {

      }
    );
  }
}
