import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SwitchComponent } from './switch/switch.component';
import { DarkModeComponent } from './Cap03/dark-mode/dark-mode.component';
import { Style13Component } from './Cap03/style13/style13.component';
import { Style14Component } from './Cap03/style14/style14.component';
import { Container15Component } from './Cap03/container15/container15.component';
import { Template16Component } from './Cap03/template16/template16.component';


const routes: Routes = [

  { path: 'switch', component: SwitchComponent },
  { path: 'dark', component: DarkModeComponent },
  { path: 'style', component: Style13Component },
  { path: 'style2', component: Style14Component },
  { path: 'container', component: Container15Component },
  { path: 'template', component: Template16Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
