import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.css'
})
export class JobCardComponent {
  @Input() job !: any;
  @Input() page = '';

  ngOnInit(){
    // console.log(this.job);
  }

}
