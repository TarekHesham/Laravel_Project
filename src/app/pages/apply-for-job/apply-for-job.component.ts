import { Component } from '@angular/core';
import { ApplyWithCvComponent } from '../../components/apply-with-cv/apply-with-cv.component';
import { ApplyWithFormComponent } from '../../components/apply-with-form/apply-with-form.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-apply-for-job',
  standalone: true,
  imports: [ApplyWithCvComponent, ApplyWithFormComponent, RouterLink, RouterLinkActive],
  templateUrl: './apply-for-job.component.html',
  styleUrl: './apply-for-job.component.css'
})
export class ApplyForJobComponent {
  selectedTab: string = 'upload'
}
