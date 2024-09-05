import { Component } from '@angular/core';
import { CardDetailsComponent } from "../../components/card-details/card-details.component";

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CardDetailsComponent],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent {

}
