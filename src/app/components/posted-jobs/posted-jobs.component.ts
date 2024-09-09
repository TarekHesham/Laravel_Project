import { Component } from '@angular/core';
import { JobCardComponent } from '../job-card/job-card.component';

@Component({
  selector: 'app-posted-jobs',
  standalone: true,
  imports: [JobCardComponent],
  templateUrl: './posted-jobs.component.html',
  styleUrl: './posted-jobs.component.css'
})
export class PostedJobsComponent {

}
