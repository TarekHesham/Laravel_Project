import { Component } from '@angular/core';
import { ApplicationComponent } from '../../components/application/application.component';
import { ActivatedRoute } from '@angular/router';
import { EmployerService } from '../../services/employer.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-review-applications',
  standalone: true,
  imports: [ApplicationComponent, DatePipe],
  templateUrl: './review-applications.component.html',
  styleUrl: './review-applications.component.css'
})
export class ReviewApplicationsComponent {

  public job: any;
  constructor(private employerService:EmployerService, private route: ActivatedRoute){}

  ngOnInit(){
    this.route.params.subscribe(params => {
      const slug = params ['slug'];
      this.employerService.getApplicationsOnJob(slug).subscribe(
        (response) => this.job = response,
      (error) => {
        console.error('Applications failed to retrive', error);
      }
      );

      setInterval(() => {
        this.employerService.getApplicationsOnJob(slug).subscribe(
          (response) => {
            if (this.job !== response) this.job = response;
          },
          (error) => {
            console.error('Applications failed to retrive', error);
          }
          );
      }, 3000);
    });
  }

  applicationState(id: number, action: string) {
    if (action === 'accept') {
      this.employerService.acceptApplication(id).subscribe(
        (response) => {
          alert(response.message);
          // Change status in the list
          this.job.applications.find((app: any) => app.id === id).status = 'accepted';
        },
        (error) => {
          console.error('Application failed to accept', error);
        }
      )
    } else if (action === 'reject') {
      this.employerService.rejectApplication(id).subscribe(
        (response) => {
          alert(response.message);
          this.job.applications.find((app: any) => app.id === id).status = 'rejected';
        },
        (error) => {
          console.error('Application failed to reject', error);
        }
      )
    }
  }
}
