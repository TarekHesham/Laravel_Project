import { Component } from '@angular/core';
import Choices from 'choices.js';

@Component({
  selector: 'app-multi-select',
  standalone: true,
  imports: [],
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.css'
})
export class MultiSelectComponent {
  constructor() { }

  // Use AfterViewInit to ensure the DOM is ready before initializing Choices.js
  ngAfterViewInit(): void {
    const multiSelectElement = document.getElementById('multiSelect') as HTMLSelectElement;

    // Initialize Choices.js on the select element
    const choices = new Choices(multiSelectElement, {
      removeItemButton: true,
      searchEnabled: true,
      placeholder: true,
      placeholderValue: 'Select all options'
    });
  }

}
