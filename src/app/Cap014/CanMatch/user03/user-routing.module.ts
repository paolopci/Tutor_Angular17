import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { User03Component } from './user03.component';

const routes: Routes = [
  { path: '', component: User03Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
