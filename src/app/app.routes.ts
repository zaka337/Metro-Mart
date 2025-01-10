import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/admin/login/login.component';
import { LayoutComponent } from './Pages/admin/layout/layout.component';
import { ProductsComponent } from './Pages/admin/products/products.component';
import { CategoriesComponent } from './Pages/admin/categories/categories.component';
import { CategoryProductsComponent } from './Pages/website/category-products/category-products.component';
import { ContactComponent } from './Pages/admin/contact/contact.component';
import { LandingComponent } from './Pages/website/landing/landing.component';
import { OrderComponent } from './Pages/admin/order/order.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    
   
    
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'order',
                component: OrderComponent
            },
            {
                path: 'products',
                component: ProductsComponent
            },
            {
                path: 'category',
                component: CategoriesComponent
            },
            {
                path: 'contact',
                component: ContactComponent
            },
           
            {
                path: 'shop',
                component: LandingComponent
            },
        ]
    },
   

];
