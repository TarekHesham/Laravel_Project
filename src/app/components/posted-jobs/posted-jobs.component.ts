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
export class PostedJobsComponent implements OnInit {
  constructor(private employerService: EmployerService){}
  myJobs!: any;


  ngOnInit(){
    this.employerService.getJobs().subscribe(
      (response) => {
        console.log('jobs arrived Successfully', response);
        this.myJobs = response;
      },
      (error) => {
        console.error('jobs failed to arrive', error);
      }
    );
  }

}
