import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-job-form',
  standalone: true,
  imports: [],
  templateUrl: './job-form.component.html',
  styleUrl: './job-form.component.css'
})
export class JobFormComponent {

  @Input () page ='';

}
