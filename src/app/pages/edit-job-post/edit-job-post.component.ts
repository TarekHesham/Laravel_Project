import { Component, OnInit } from '@angular/core';
import { JobFormComponent } from '../../components/job-form/job-form.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-job-post',
  standalone: true,
  imports: [JobFormComponent],
  templateUrl: './edit-job-post.component.html',
  styleUrl: './edit-job-post.component.css'
})
export class EditJobPostComponent implements OnInit 
{
  id!:any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

  }
}
