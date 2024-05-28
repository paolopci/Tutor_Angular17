import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppUserModuleComponent } from '../Cap08/app-user-module/app-user-module.component';

const routes: Routes = [
  {
    path: 'admin', children: [
      { path: 'user', component: AppUserModuleComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
