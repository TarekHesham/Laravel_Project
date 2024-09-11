import { Component, Input } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {

  @Input() comments: any;
  @Input () jobId: any;
  constructor(private globalService: GlobalService , private router: Router) { }

  addComment(data: any): void {
    console.log(this);

    const sendData ={content : data, job_id : this.jobId};
    this.globalService.addComment(sendData).subscribe(data => {
      console.log(data);
      // reload comments
      // this.router.navigate(['/job-details', this.jobId]);
      this.comments.unshift(data.comment);
    }, error => {
      console.log(error);
    })
  }
}
