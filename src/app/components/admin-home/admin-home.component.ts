import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {
  applications: any;
  comments: any;
  posts: any;


  constructor(private jobService: JobService, private adminService: AdminService) {}

  ngOnInit() {
    this.adminService.getComments().subscribe((response) => {
      this.comments = response.data.length;
    });
    this.jobService.getJobs().subscribe((response) => {
      this.posts = response.length;
    });
  }
}
