import { Component } from '@angular/core';
import { JobFormComponent } from '../../components/job-form/job-form.component';
import { EmployerService } from '../../services/employer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-job-post',
  standalone: true,
  imports: [JobFormComponent],
  templateUrl: './create-job-post.component.html',
  styleUrl: './create-job-post.component.css'
})
export class CreateJobPostComponent {

  constructor(private employerService:EmployerService, private router: Router){}

  onFormSubmit(formData: any) {
    this.employerService.createJob(formData).subscribe(
      (response) => {
        console.log('Job saved Successfully', response);
        this.router.navigate(['/job-details', response.job.slug]);
      },
      (error) => {
        console.error('Post failed:', error);
      }
    )
    console.log('Form Data received from JobFormComponent:', formData);
  }

}
