import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { JobService } from '../../services/job.service';
import { Router } from '@angular/router';

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


  constructor(private jobService: JobService, private adminService: AdminService, private router:Router) {}

  ngOnInit() {
    this.adminService.getComments().subscribe((response) => {
      this.comments = response.data.length;
    }, (error) => {
        this.router.navigate(['/']);
    });
    this.jobService.getJobs().subscribe((response) => {
      this.posts = response.length;
    });
  }
}
