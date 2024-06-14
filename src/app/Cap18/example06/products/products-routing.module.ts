import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home06Component } from './home06/home06.component';

const routes: Routes = [
  { path: 'products/home', component: Home06Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
