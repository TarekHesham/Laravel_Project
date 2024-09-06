import { Routes } from '@angular/router';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateJobPostComponent } from './pages/create-job-post/create-job-post.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { AdminDashboardPageComponent } from './pages/admin-dashboard-page/admin-dashboard-page.component';
import { EditJobPostComponent } from './pages/edit-job-post/edit-job-post.component';

export const routes: Routes = [
    
    {
        path: 'job-details',
        component: CardDetailsComponent
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
        path: 'post-job',
        component: CreateJobPostComponent,
        title: 'Create Job',
    },
    {
        path: 'admin-dashboard',
        component: AdminDashboardPageComponent,
        title: 'dashboard'    }
    ,
    {
        path: 'edit-post',
        component: EditJobPostComponent,
        title: 'Edit Post',
    }
];