import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { SwitchComponent } from './switch/switch.component';
import { CarouselComponent } from './carousel/carousel.component';
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
import { TestComponent } from './Cap04/test/test.component';
import { DocheckComponent } from './Cap04/docheck/docheck.component';
import { Test02Component } from './Cap04/docheck/test02/test02.component';
import { AfterContInitComponent } from './Cap04/after-cont-init/after-cont-init.component';
import { Test04Component } from './Cap04/after-cont-init/test04/test04.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchComponent,
    CarouselComponent,
    DarkModeComponent,
    Style13Component,
    Style14Component,
    Container15Component,
    Template16Component,
    Template18Component,
    TemplateOutlet19Component,
    Portfolio21Component,
    IntroComponent,
    OnchangeComponent,
    TestComponent,
    DocheckComponent,
    Test02Component,
    AfterContInitComponent,
    Test04Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
