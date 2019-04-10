import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { EditProdctsComponent } from './components/edit-prodcts/edit-prodcts.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
{path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'product-list', component:ProductListComponent},
  {path:'edit', component:EditProdctsComponent},
  {path:'add', component:AddProductsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
