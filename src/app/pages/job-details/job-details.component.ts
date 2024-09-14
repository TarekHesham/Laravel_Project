import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommentsComponent } from '../../components/comments/comments.component';
import { JobService } from '../../services/job.service';
import { DatePipe } from '@angular/common';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [RouterLink, CommentsComponent, DatePipe],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})

export class JobDetailsComponent {

  job: any;
  categories: any[] = [];
  user: User = JSON.parse(localStorage.getItem('user') || '{}');

  constructor(
    private jobService: JobService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
      this.jobService.getJobBySlug(params['slug']).subscribe(data => {
        console.log(data);
        this.job = data;
      });
    });
  }


  
}
