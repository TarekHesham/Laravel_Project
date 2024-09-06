import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { ApplyForJobComponent } from './pages/apply-for-job/apply-for-job.component';


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
        path: 'apply-for-job',
        component: ApplyForJobComponent
    },


];
