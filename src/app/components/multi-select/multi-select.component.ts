import { Component, Input, OnInit } from '@angular/core';
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
  options!: any[];
  @Input() options_type = '';

  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    this.globalService.autoComplete('all', this.options_type).subscribe({
      next: (response: any) => {
        if (response) {
          this.options = response;
          setTimeout(() => {
            const selectElements = document.getElementById(this.options_type);
            const config = {
              removeItemButton: true,
              searchEnabled: true,
              placeholder: true,
              placeholderValue: 'Select options from menu',
            };
              if (selectElements) new Choices(selectElements, config);
          }, 500);
        }
      },
      error: (error) => {
        console.error('Error loading options', error);
      },
    });
  }

  // Use AfterViewInit to ensure the DOM is ready before initializing Choices.js
  // ngAfterViewInit(): void {
  // }

  // // Initialize Choices.js on the select element
  // const choices = new Choices(multiSelectElement, {
  //   removeItemButton: true,
  //   searchEnabled: true,
  //   placeholder: true,
  //   placeholderValue: 'Select all options'
  // });

  // }
}
