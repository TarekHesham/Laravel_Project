import { Component, OnInit } from '@angular/core';
import { JobCardComponent } from "../../components/job-card/job-card.component";
import { JobsService } from '../../services/jobs.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [JobCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{ 

  jobs!: any[] ;
  token!: any;


  constructor(private jobService:JobsService, private authService:AuthService){

  }

  ngOnInit() {
    this.authService.getToken().subscribe((response:any)=>{
      this.token = response;
      this.jobService.getJobs(this.token).subscribe((response:any)=>{
        this.jobs = response;
      })
    })
  }

}
