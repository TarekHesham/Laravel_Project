import { Component, Input, OnInit } from '@angular/core';
import Choices from 'choices.js';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-multi-select',
  standalone: true,
  imports: [],
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.css'
})
export class MultiSelectComponent implements OnInit {
  constructor(private globalService: GlobalService) { }

  options:any[] = [{
    id: 600,
    name: "Ts"
  }];
  @Input() options_type = '';


  ngOnInit(): void {
    this.globalService.autoComplete('all', this.options_type).subscribe(
      (response:any) => {
        this.options = response;  // Update the options list
        console.log(this.options);
      },
      (error) => {
        console.error('Error loading options', error);
      });

      document.querySelectorAll("select").forEach(element=>new Choices(element.innerHTML));

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
