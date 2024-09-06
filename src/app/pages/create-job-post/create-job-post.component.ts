import { Component } from '@angular/core';
import { JobFormComponent } from '../../components/job-form/job-form.component';

@Component({
  selector: 'app-create-job-post',
  standalone: true,
  imports: [JobFormComponent],
  templateUrl: './create-job-post.component.html',
  styleUrl: './create-job-post.component.css'
})
export class CreateJobPostComponent {

}
