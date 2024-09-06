import { Component } from '@angular/core';
import { JobFormComponent } from '../../components/job-form/job-form.component';

@Component({
  selector: 'app-edit-job-post',
  standalone: true,
  imports: [JobFormComponent],
  templateUrl: './edit-job-post.component.html',
  styleUrl: './edit-job-post.component.css'
})
export class EditJobPostComponent {

}
