import { Routes } from '@angular/router';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { HeaderComponent } from './components/header/header.component';

export const routes: Routes = [
    
    {
        path: 'job-details',
        component: CardDetailsComponent
    }
];
