import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CreateJobPostComponent } from '../create-job-post/create-job-post.component';
import { EmployerInfoComponent } from '../../components/employer-info/employer-info.component';
import { PostedJobsComponent } from '../../components/posted-jobs/posted-jobs.component';
import { ReviewApplicationsComponent } from '../review-applications/review-applications.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-employer-profile',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CreateJobPostComponent, EmployerInfoComponent, PostedJobsComponent, ReviewApplicationsComponent],
  templateUrl: './employer-profile.component.html',
  styleUrl: './employer-profile.component.css'
})
export class EmployerProfileComponent implements OnInit{
  selectedTab: string = 'myInfo';
  user!: any;
  constructor(private authService:AuthService){}

  ngOnInit(): void {
    this.authService.getUser().subscribe({
      next: (response: any) => {
        this.user = response;
        console.log(this.user);
        
      },
      error: (error) => {
        console.error('Error loading user', error);
      },
    });
  }
}
