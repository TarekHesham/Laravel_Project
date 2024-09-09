import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { CreateJobPostComponent } from './pages/create-job-post/create-job-post.component';
import { EditJobPostComponent } from './pages/edit-job-post/edit-job-post.component';
import { ApplyForJobComponent } from './pages/apply-for-job/apply-for-job.component';
import { CandidateProfileComponent } from './pages/candidate-profile/candidate-profile.component';
import { EmployerProfileComponent } from './pages/employer-profile/employer-profile.component';
import { HomeComponent } from './pages/home/home.component';
import { ApplicationComponent } from './components/application/application.component';
import { ReviewApplicationsComponent } from './pages/review-applications/review-applications.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginPageComponent,
        title: 'login',
    },
    {
        path: 'signup',
        component: SignupPageComponent,
        title: 'signup',
    },
    {
        path: 'job-details',
        component: CardDetailsComponent
    },
    {
        path: 'post-job',
        component: CreateJobPostComponent,
        title: 'Create Job',
    }
    ,
    {
        path: 'edit-post',
        component: EditJobPostComponent,
        title: 'Edit Post',
    },
    {
        path: 'apply-for-job',
        component: ApplyForJobComponent
    },
    {
        path: 'candidate-profile',
        component: CandidateProfileComponent
    },
    {
        path: 'employer-profile',
        component: EmployerProfileComponent,
        title: 'Employer Profile',
    },
    {
        path: 'applications',
        component: ReviewApplicationsComponent
    }

];

