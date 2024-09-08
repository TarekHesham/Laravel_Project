import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-post-table',
  standalone: true,
  imports: [],
  templateUrl: './admin-post-table.component.html',
  styleUrl: './admin-post-table.component.css'
})
export class AdminPostTableComponent {
  jobTitle: string = "software engineer";
  experienceLevel: string = "senior";
  workType: string = "remote";
  location: string = "cairo";
  employer: string = "yossef magdy";
  createdAt: string = "2024-08-01";
  status: string = "pending";
}
