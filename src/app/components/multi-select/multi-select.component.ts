import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import Choices from 'choices.js';
import { GlobalService } from '../../services/global.service';
import { JobService } from '../../services/job.service';



@Component({
  selector: 'app-multi-select',
  standalone: true,
  imports: [],
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.css',
})
export class MultiSelectComponent implements OnInit {
  options: any[] = [];
  @Input() options_type = '';
  @Output() selectedOptions = new EventEmitter<any[]>();
  @Input () jobId!: any;
  @Input() initialOptions !: any;

  constructor(private globalService: GlobalService, private jobService:JobService) {
  }

  ngOnInit(): void {
    // this.getJob();
    this.globalService.autoComplete('all', this.options_type).subscribe({
      next: (response: any) => {
        if (response) {
          this.options = response;
          setTimeout(() => {
            const selectElement = document.getElementById(this.options_type) as HTMLSelectElement;
            const config = {
              removeItemButton: true,
              searchEnabled: true,
              placeholder: true,
              placeholderValue: 'Select options from menu',
            };

            if (selectElement) new Choices(selectElement, config);

            selectElement.addEventListener('change', () => {
              const selectedValues = Array.from(selectElement.selectedOptions).map(
                (option: HTMLOptionElement) => option.value
              );
              this.selectedOptions.emit(selectedValues);  // Emit selected values
            });

          }, 2000);
        }
      },
      error: (error) => {
        console.error('Error loading options', error);
      },
    });

  }


  getJob(){
    this.jobService.getJobById(this.jobId).subscribe((response:any)=>{
      this.initialOptions = response[this.options_type].map((option:any)=>option.id);
    });

  }

  isSelected(optionId: number): boolean {
    // console.log(this.initialOptions?.includes(optionId));
    return this.initialOptions?.includes(optionId);
  }

}
