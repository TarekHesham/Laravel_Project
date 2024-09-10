import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-admin-post-table',
  standalone: true,
  imports: [],
  templateUrl: './admin-post-table.component.html',
  styleUrl: './admin-post-table.component.css'
})
export class AdminPostTableComponent {

  jobs: any;

  constructor(private adminService: AdminService, private jobService: JobService) {}

  accept(id: number) {
    this.adminService.changeJobStatus(id, 'accepted').subscribe((response) => {
      for (let index = 0; index < this.jobs.length; index++) {
        if (this.jobs[index].id == response.data.id) {
          this.jobs[index].status = response.data.status;
          break;
        }
      }
    });
  }
  reject(id: number) {
    this.adminService.changeJobStatus(id, 'rejected').subscribe((response) => {
      for (let index = 0; index < this.jobs.length; index++) {
        if (this.jobs[index].id == response.data.id) {
          this.jobs[index].status = response.data.status;
          break;
        }
      }
    });
  }
  ngOnInit() {
    this.jobService.getJobs().subscribe((data) => {
      this.jobs = data;
    });
  }
}
