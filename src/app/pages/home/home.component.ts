import { Component, OnInit } from '@angular/core';
import { JobCardComponent } from "../../components/job-card/job-card.component";
import { FormGroup, ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import { GlobalService } from '../../services/global.service';
// import {}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [JobCardComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent { 

  jobs!: any[] ;

  locations:any;
  categories:any;

  selectedLocation: string = "";
  searchForm = new FormGroup({
    jobTitle: new FormControl(''),
    location: new FormControl(''),
    category: new FormControl(''),
    experienceLevel: new FormControl(''),
    salaryFrom: new FormControl(''),
    salaryTo: new FormControl(''),
    datePosted: new FormControl(''),
  });
  constructor(private globalService:GlobalService){}
  ngOnInit() {
    this.globalService.locations().subscribe(
      (data) => {
        this.locations = data;
      }
    );
    this.globalService.categories().subscribe(
      (data) => {
        this.categories = data;
      }
    );

    this.submit();
  }
  submit() {
    this.globalService.search({
      query: this.searchForm.value['jobTitle'],
      location: this.searchForm.value['location'],
      category: this.searchForm.value['category'],
      experience_level: this.searchForm.value['experienceLevel'],
      salary_from: this.searchForm.value['salaryFrom'],
      salary_to: this.searchForm.value['salaryTo'],
      created_at: this.searchForm.value['datePosted'],
    }).subscribe((response) => {
      this.jobs = response;
      console.log(this.jobs);
    });
  }

}
