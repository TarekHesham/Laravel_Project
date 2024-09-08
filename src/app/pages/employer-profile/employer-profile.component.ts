import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CreateJobPostComponent } from '../create-job-post/create-job-post.component';
import { EmployerInfoComponent } from '../../components/employer-info/employer-info.component';
import { PostedJobsComponent } from '../../components/posted-jobs/posted-jobs.component';
import { ReviewApplicationsComponent } from '../review-applications/review-applications.component';

@Component({
  selector: 'app-employer-profile',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CreateJobPostComponent, EmployerInfoComponent, PostedJobsComponent, ReviewApplicationsComponent],
  templateUrl: './employer-profile.component.html',
  styleUrl: './employer-profile.component.css'
})
export class EmployerProfileComponent {
  selectedTab: string = 'myInfo'
}
