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

  constructor(private globalService: GlobalService){
  }

  @Input() page = '';
  
  skills: any[] = [];
  benefits: any[] = [];
  categories: any[] = [];
  locations: any[] = [];

  ngOnInit(): void {
    this.loadLocations();
    this.loadSkills();
    this.loadCategories();
    this.loadBenefits();
  }


  loadSkills(): void {
      this.globalService.skills().subscribe(
        (response:any) => {
          this.skills = response;  // Update the skills list
          console.log(this.skills);
        },
        (error) => {
          console.error('Error loading skills', error);
        }
      );
  }

  
  loadCategories(): void {
    this.globalService.autoComplete('all','categories').subscribe(
      (response:any) => {
        this.categories = response;  // Update the skills list
        // console.log(response);
      },
      (error) => {
        console.error('Error loading Categories', error);
      }
    );
  }

  loadBenefits(): void{
    this.globalService.autoComplete('all','benefits').subscribe(
      (response:any) => {
        this.benefits = response;  // Update the skills list
        // console.log(response);
      },
      (error) => {
        console.error('Error loading Benefits', error);
      }
    );
  }

  loadLocations(): void {
    this.globalService.locations().subscribe(
      (response: any) => {
        this.locations = response;
        // console.log(this.locations);
      },
      (error) => {
        console.error('Error loading locations', error);
      }
    );
  }

  // autoComplete(event:any){
    
  //   console.log(event);
    
  // }
}
