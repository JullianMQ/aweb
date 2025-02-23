import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EmplistComponent } from './pages/emplist/emplist.component';
import { ProductComponent } from './pages/product/product.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'emplist', component: EmplistComponent},
    {path: 'product', component: ProductComponent},
    {path: 'about', component: AboutComponent},
    {path: 'pagenotfound', component: PagenotfoundComponent},
];
