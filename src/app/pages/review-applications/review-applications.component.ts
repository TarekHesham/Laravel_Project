import { Component } from '@angular/core';
import { ApplicationComponent } from '../../components/application/application.component';

@Component({
  selector: 'app-review-applications',
  standalone: true,
  imports: [ApplicationComponent],
  templateUrl: './review-applications.component.html',
  styleUrl: './review-applications.component.css'
})
export class ReviewApplicationsComponent {

}
