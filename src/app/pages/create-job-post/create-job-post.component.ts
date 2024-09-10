import { Component } from '@angular/core';
import { JobFormComponent } from '../../components/job-form/job-form.component';
import { EmployerService } from '../../services/employer.service';

@Component({
  selector: 'app-create-job-post',
  standalone: true,
  imports: [JobFormComponent],
  templateUrl: './create-job-post.component.html',
  styleUrl: './create-job-post.component.css'
})
export class CreateJobPostComponent {

  constructor(private employerService:EmployerService){}

  onFormSubmit(formData: any) {
    this.employerService.createJob(formData).subscribe(
      (response) => {
        console.log('Post saved Successfully', response);
      },
      (error) => {
        console.error('Post failed:', error);
      }
    )
    console.log('Form Data received from JobFormComponent:', formData);
  }

  

}
