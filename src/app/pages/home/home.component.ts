import { Component, OnInit } from '@angular/core';
import { JobCardComponent } from "../../components/job-card/job-card.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [JobCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{ 



  constructor(){

  }

 

}
