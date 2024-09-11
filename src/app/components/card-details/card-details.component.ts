import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommentsComponent } from "../comments/comments.component";
import { CandidateService } from '../../services/candidate.service';
import { JobService } from '../../services/job.service';
import { DatePipe } from '@angular/common';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-card-details',
  standalone: true,
  imports: [RouterLink, CommentsComponent, DatePipe],
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.css'
})

export class CardDetailsComponent {

  job: any;
  categories: any[] = [];

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
