import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home06Component } from './home06/home06.component';
import { Create06Component } from './create06/create06.component';

const routes: Routes = [
  { path: 'products/home06', component: Home06Component },
  { path: 'products/create06', component: Create06Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
