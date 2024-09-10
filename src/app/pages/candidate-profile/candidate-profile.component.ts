import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../../services/candidate.service';
import { JobService } from '../../services/job.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-candidate-profile',
  standalone: true,
  imports: [],
  templateUrl: './candidate-profile.component.html',
  styleUrl: './candidate-profile.component.css'
})
export class CandidateProfileComponent implements OnInit {
  candidate: any;
  jobs: any[] = [];

  constructor(
    private candidateService: CandidateService,
    private jobService: JobService,
    private authService: AuthService
  ) { }
  ngOnInit(): void {
    this.getCandidateData();
    console.log(this.candidate);
    this.candidateApplications();
  }

  getCandidateData() {
    this.authService.getUser()
      .subscribe(
        (data) => {
          this.candidate = data;
          console.log(this.candidate);
        },
        (error) => console.error(error)
      );
  }

  candidateApplications() {

    this.candidateService.getApplications()
      .subscribe(
        (data) => {
          this.jobs = data;
          console.log(this.jobs);
        },
        (error) => console.error(error)
      );
  }

  cancelJobApplication(applicationId: number) {
    this.candidateService.cancelApplication(applicationId)
      .subscribe(
        (data) => {
          console.log(data);
          // get the index of the job
          const jobApplication = this.jobs.findIndex((job) => job.application_id === applicationId);
          // remove the job
          this.jobs.splice(jobApplication, 1);
        },
        (error) => console.error(error)
      );
  }
}
