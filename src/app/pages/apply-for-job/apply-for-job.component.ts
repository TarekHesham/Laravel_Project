import { Component } from '@angular/core';
import { ApplyWithCvComponent } from '../../components/apply-with-cv/apply-with-cv.component';
import { ApplyWithFormComponent } from '../../components/apply-with-form/apply-with-form.component';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-apply-for-job',
  standalone: true,
  imports: [ApplyWithCvComponent, ApplyWithFormComponent, RouterLink, RouterLinkActive],
  templateUrl: './apply-for-job.component.html',
  styleUrl: './apply-for-job.component.css'
})
export class ApplyForJobComponent {
  selectedTab: string = 'cv'
  public jobId: any;
  constructor(private jobService: JobService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      console.log(params);
      this.jobService.getJobBySlug(slug).subscribe(data => {
        console.log(data);
        this.jobId = data.id;
      })
    })
  }
}
