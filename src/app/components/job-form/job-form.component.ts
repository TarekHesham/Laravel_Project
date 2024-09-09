import { Component, Input } from '@angular/core';
import { MultiSelectComponent } from '../multi-select/multi-select.component';

@Component({
  selector: 'app-job-form',
  standalone: true,
  imports: [MultiSelectComponent],
  templateUrl: './job-form.component.html',
  styleUrl: './job-form.component.css'
})
export class JobFormComponent {

  @Input () page ='';
  skills = [{
    "id": 1,
    "name": "HTML"
  }];
  benefits = [];
  categories = [];
  location = [];

  autoComplete(event:any){
    
    console.log(event);
    
  }
}