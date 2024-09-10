import { Component, Input, OnInit } from '@angular/core';
import { MultiSelectComponent } from '../multi-select/multi-select.component';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-job-form',
  standalone: true,
  imports: [MultiSelectComponent],
  templateUrl: './job-form.component.html',
  styleUrl: './job-form.component.css'
})
export class JobFormComponent implements OnInit {
  @Input() page = '';
  locations: any[] = [];

  constructor(private globalService: GlobalService){
  }

  ngOnInit(): void {
    this.globalService.locations().subscribe({
      next: (response: any) => {
        this.locations = response;        
      },
      error: (error) => {
        console.error('Error loading locations', error);
      }
  });
  }
}
