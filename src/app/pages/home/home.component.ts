import { Component, OnInit } from '@angular/core';
import { JobCardComponent } from "../../components/job-card/job-card.component";
import { FormGroup, ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [JobCardComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent { 

  jobs!: any[] ;
  token!: any;


  locations:any = [
    {
      name: 'egypt',
      id: 1,
    },
    {
      name: 'cairo',
      id: 2,
    }
  ];


  categories:any = [
    {
      name: 'engineering',
      id: 1,
    },
    {
      name: 'sales',
      id: 2,
    }
  ];



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
  constructor(){

  }
  submit() {
    console.log(this.searchForm.value);
  }

}
