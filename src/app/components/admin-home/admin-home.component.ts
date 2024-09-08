import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {
  users = 20;
  posts = 10;
  comments = 10;
  applications = 10;
  ngOnInit() {
    console.log('init home');
  }
  ngOnDestroy() {
    console.log('destroy home');
  }
}
