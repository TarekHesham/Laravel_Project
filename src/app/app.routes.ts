import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent} from './pages/register-page/register-page.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginPageComponent,
        title: 'login',
    },
    {
        path: 'register',
        component: RegisterPageComponent,
        title: 'register',
    },
];