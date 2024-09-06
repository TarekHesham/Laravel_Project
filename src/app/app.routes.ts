import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateJobPostComponent } from './pages/create-job-post/create-job-post.component';
import { EditJobPostComponent } from './pages/edit-job-post/edit-job-post.component';

export const routes: Routes = [
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
    }
];
