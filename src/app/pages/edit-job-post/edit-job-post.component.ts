import { Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { JobFormComponent } from '../../components/job-form/job-form.component';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployerService } from '../../services/employer.service';


@Component({
  selector: 'app-edit-job-post',
  standalone: true,
  imports: [JobFormComponent],
  templateUrl: './edit-job-post.component.html',
  styleUrl: './edit-job-post.component.css'
})
export class EditJobPostComponent implements OnInit
{
  id!:any;
  @ViewChild (JobFormComponent) jobFormComponent!:JobFormComponent;
  constructor(private route: ActivatedRoute, private employerService: EmployerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

  }

  onFormSubmitEdit(formData: any) {
    this.employerService.updateJob(this.id,formData).subscribe(
      (response) => {
        console.log('Post Updated Successfully', response);
        this.router.navigate(['/job-details', response.job.slug]);
      },
      (error) => {
        console.error('Post failed to update', error);
      }
    );


    // console.log('Form Data received from JobFormComponent:', formData);
  }
}
