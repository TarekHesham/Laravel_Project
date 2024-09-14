import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EmployerService } from '../../services/employer.service';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.css'
})
export class JobCardComponent implements OnInit{
  @Input() job !: any;
  @Input() page = '';
  isPostedJobs:boolean = false;
  

  constructor(private employerService:EmployerService){}

  cancelJobPost(jobId: number){
    this.employerService.cancelJob(jobId).subscribe(
      (data) => {
        console.log("post deleted successfully", data);
        this.job.status = "closed";
      },
      (error) => console.log("post delete failed", error)
      
    );

  }

  ngOnInit(): void {
    this.isPostedJobs = (this.page == 'employer_profile');
  }


}
