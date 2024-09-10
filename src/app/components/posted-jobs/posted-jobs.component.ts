import { Component, OnInit } from '@angular/core';
import { JobCardComponent } from '../job-card/job-card.component';
import { EmployerService } from '../../services/employer.service';


@Component({
  selector: 'app-posted-jobs',
  standalone: true,
  imports: [JobCardComponent],
  templateUrl: './posted-jobs.component.html',
  styleUrl: './posted-jobs.component.css'
})
export class PostedJobsComponent implements OnInit{

  constructor(private employerService: EmployerService){}

  ngOnInit(){
    this.employerService.getJobs().subscribe(
      (response) => {
        console.log('Post Successfully', response);
      },
      (error) => {
        console.error('Post failed:', error);
      }
    );
  }

}
