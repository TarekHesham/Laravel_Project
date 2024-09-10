import { Component, Input } from '@angular/core';
import { CandidateService } from '../../services/candidate.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply-with-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './apply-with-form.component.html',
  styleUrl: './apply-with-form.component.css'
})
export class ApplyWithFormComponent {
  @Input() jobId: any;
  applicationForm: FormGroup;

  constructor(private candidateService: CandidateService, private router: Router) {
    this.applicationForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone_number: new FormControl('', [Validators.required])
    });
  }

  submitForm() {
    if (this.applicationForm.valid) {
      this.applicationForm.markAllAsTouched();
      this.applicationForm.value.job_id = this.jobId;
      this.applicationForm.value.type = 'form';
      
      this.candidateService.applyApplication(this.applicationForm.value).subscribe(

        (response) => {
          console.log('Application submitted successfully:', response);
          this.router.navigate(['/candidate-profile']);
        },
        (error) => {
          console.error('Error submitting application:', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
