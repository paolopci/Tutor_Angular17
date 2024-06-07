import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Admin03Component } from './admin03.component';

const routes: Routes = [
  { path: '', component: Admin03Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
