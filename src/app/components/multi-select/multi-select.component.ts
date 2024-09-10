import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import Choices from 'choices.js';
import { GlobalService } from '../../services/global.service';

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

  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
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


          }, 500);
        }
      },
      error: (error) => {
        console.error('Error loading options', error);
      },
    });
  }

}
