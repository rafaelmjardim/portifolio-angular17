import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/main/main.component').then(c => c.MainComponent)
    }
];
