import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
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
import { InputComponent } from './Cap05/input/input.component';
import { ChildComponent } from './Cap05/input/child/child.component';
import { AppOutputParentComponent } from './Cap05/app-output-parent/app-output-parent.component';
import { ChildOutputComponent } from './Cap05/app-output-parent/child-output/child-output.component';
import { ParentShareComponent } from './Cap05/parent-share/parent-share.component';
import { ChildShareComponent } from './Cap05/parent-share/child-share/child-share.component';
import { ParentViewChildComponent } from './Cap05/parent-view-child/parent-view-child.component';
import { ChildViewChildComponent } from './Cap05/parent-view-child/child-view-child/child-view-child.component';
import { HighlightElementDirective } from './Cap05/directives/highlight-element.directive';
import { AppHostBindingComponent } from './Cap05/app-host-binding/app-host-binding.component';
import { AppPickColorBindingComponent } from './Cap05/app-pick-color-binding/app-pick-color-binding.component';
import { AppBuildPipesComponent } from './Cap06/app-build-pipes/app-build-pipes.component';
import { AppSlidePipeComponent } from './Cap06/app-slide-pipe/app-slide-pipe.component';
import { AppPageNavigSlidePipeComponent } from './Cap06/app-page-navig-slide-pipe/app-page-navig-slide-pipe.component';
import { AppPoundtokgConvertComponent } from './Cap06/app-poundtokg-convert/app-poundtokg-convert.component';
import { AppJsonPipeComponent } from './Cap06/app-json-pipe/app-json-pipe.component';
import { AppTabledatatoJsonComponent } from './Cap06/app-tabledatato-json/app-tabledatato-json.component';
import { AppCustomPipeComponent } from './Cap07/app-custom-pipe/app-custom-pipe.component';
import { AppendTextPipe } from './Cap07/pipes/append-text.pipe';


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
    Test04Component,
    InputComponent,
    ChildComponent,
    AppOutputParentComponent,
    ChildOutputComponent,
    ParentShareComponent,
    ChildShareComponent,
    ParentViewChildComponent,
    ChildViewChildComponent,
    HighlightElementDirective,
    AppHostBindingComponent,
    AppPickColorBindingComponent,
    AppBuildPipesComponent,
    AppSlidePipeComponent,
    AppPageNavigSlidePipeComponent,
    AppPoundtokgConvertComponent,
    AppJsonPipeComponent,
    AppTabledatatoJsonComponent,
    AppCustomPipeComponent,
    AppendTextPipe,
  
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
