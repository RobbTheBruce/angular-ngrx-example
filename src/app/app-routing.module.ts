import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
    { path: '', component: ProductsComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'products/:productId', component: ProductsComponent }
  ];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
