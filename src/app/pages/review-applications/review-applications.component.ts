import { Component } from '@angular/core';
import { ApplicationComponent } from '../../components/application/application.component';
import { JobService } from '../../services/job.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review-applications',
  standalone: true,
  imports: [ApplicationComponent],
  templateUrl: './review-applications.component.html',
  styleUrl: './review-applications.component.css'
})
export class ReviewApplicationsComponent {

  public job: any;
  constructor(private jobService:JobService, private route: ActivatedRoute){}

  ngOnInit(){
    this.route.params.subscribe(params => {
      const slug = params ['slug'];
      this.jobService.getJobBySlug(slug).subscribe(
        (response) => {
          console.log(response);
          this.job = response;
      },
      (error) => {
        console.error('Applications failed to retrive', error);
      }
      );
    })
  }
}
