import { Component, Input } from '@angular/core';
import { CandidateService } from '../../services/candidate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply-with-cv',
  standalone: true,
  imports: [],
  templateUrl: './apply-with-cv.component.html',
  styleUrl: './apply-with-cv.component.css'
})
export class ApplyWithCvComponent {

  selectedFile: File | null = null;
  @Input() jobId! : any;

  constructor(private candidateService: CandidateService, private router: Router) { }

  fileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  submitCV() {
    if (!this.selectedFile) {
      alert('Please select a CV file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('cv', this.selectedFile, this.selectedFile.name);
    formData.append('job_id', this.jobId.toString());
    formData.append('type', 'cv');
    console.log(formData);
    

    this.candidateService.applyApplication(formData)
      .subscribe(response => {
        console.log('CV application submitted successfully:', response);
        alert('Your CV has been submitted successfully!');
        this.router.navigate(['/candidate-profile']);

      },
      error => {
        console.error('Error submitting CV application:', error);
        alert('An error occurred while submitting your CV. Please try again.');
      });
  }

}
