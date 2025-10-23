import { Routes } from '@angular/router';
import { ProductView } from './pages/product/product-view/product-view';
export const routes: Routes = [
    {
        path: "", component: ProductView
    },
    {
        path: "**", redirectTo: ""
    }
];
