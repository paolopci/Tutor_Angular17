import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SwitchComponent } from './switch/switch.component';
import { DarkModeComponent } from './Cap03/dark-mode/dark-mode.component';


const routes: Routes = [

  { path: 'switch', component: SwitchComponent },
  { path: 'dark', component: DarkModeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
