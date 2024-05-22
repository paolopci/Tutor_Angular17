import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SwitchComponent } from './switch/switch.component';
import { DarkModeComponent } from './Cap03/dark-mode/dark-mode.component';
import { Style13Component } from './Cap03/style13/style13.component';
import { Style14Component } from './Cap03/style14/style14.component';
import { Container15Component } from './Cap03/container15/container15.component';
import { Template16Component } from './Cap03/template16/template16.component';
import { Template18Component } from './Cap03/template18/template18.component';
import { TemplateOutlet19Component } from './Cap03/template-outlet19/template-outlet19.component';
import { Portfolio21Component } from './Cap03/portfolio21/portfolio21.component';
import { IntroComponent } from './Cap04/intro/intro.component';
import { OnchangeComponent } from './Cap04/onchange/onchange.component';
import { DocheckComponent } from './Cap04/docheck/docheck.component';
import { AfterContInitComponent } from './Cap04/after-cont-init/after-cont-init.component';
import { InputComponent } from './Cap05/input/input.component';
import { AppOutputParentComponent } from './Cap05/app-output-parent/app-output-parent.component';
import { ParentShareComponent } from './Cap05/parent-share/parent-share.component';
import { ParentViewChildComponent } from './Cap05/parent-view-child/parent-view-child.component';


const routes: Routes = [
  { path: 'switch', component: SwitchComponent },
  { path: 'dark', component: DarkModeComponent },
  { path: 'style', component: Style13Component },
  { path: 'style2', component: Style14Component },
  { path: 'container', component: Container15Component },
  { path: 'template', component: Template16Component },
  { path: 'template2', component: Template18Component },
  { path: 'outlet', component: TemplateOutlet19Component },
  { path: 'portfolio', component: Portfolio21Component }, //fine Cap 3
  { path: 'intro', component: IntroComponent }, // Inizio Cap 4
  { path: 'change', component: OnchangeComponent },
  { path: 'docheck', component: DocheckComponent },
  { path: 'after', component: AfterContInitComponent },
  { path: 'input', component: InputComponent },
  { path: 'output', component: AppOutputParentComponent },
  { path: 'share', component: ParentShareComponent },
  { path: 'viewCh', component: ParentViewChildComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
