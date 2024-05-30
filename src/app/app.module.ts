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
import { SortNumbersPipe } from './Cap07/pipes/sort-numbers.pipe';
import { AppSortNumberComponent } from './Cap07/app-sort-number/app-sort-number.component';
import { AppLetterCountComponent } from './Cap07/app-letter-count/app-letter-count.component';
import { LetterCountPipe } from './Cap07/pipes/letter-count.pipe';
import { IncrementCountPipe } from './Cap07/pipes/increment-count.pipe';
import { AppIncrementCountComponent } from './Cap07/app-increment-count/app-increment-count.component';
import { SumOfNumbersPipe } from './Cap07/pipes/sum-of-numbers.pipe';
import { AppNavigationRouterlinkComponent } from './Cap08/app-navigation-routerlink/app-navigation-routerlink.component';
import { AppNavBarComponent } from './Cap08/app-nav-bar/app-nav-bar.component';
import { AppEmployeesComponent } from './Cap08/app-employees/app-employees.component';
import { PageNotFoundComponent } from './Cap08/page-not-found/page-not-found.component';
import { AppParentRouteComponent } from './Cap08/app-parent-route/app-parent-route.component';
import { AppChildRoute01Component } from './Cap08/app-child-route01/app-child-route01.component';
import { AppChildRoute02Component } from './Cap08/app-child-route02/app-child-route02.component';
import { AppRootPageComponent } from './Cap03/app-root-page/app-root-page.component';
import { AppMenuMultiLevComponent } from './Cap08/app-menu-multi-lev/app-menu-multi-lev.component';
import { AppProductsComponent } from './Cap08/app-menu-multi-lev/app-products.component';
import { AppAboutComponent } from './Cap08/app-menu-multi-lev/app-about.component';
import { AppContactComponent } from './Cap08/app-menu-multi-lev/app-contact.component';
import { AppProductDettaglioOneComponent } from './Cap08/app-menu-multi-lev/app-product-dettaglio-one.component';
import { AppProductDettaglioTwoComponent } from './Cap08/app-menu-multi-lev/app-product-dettaglio-two.component';
import { AppProductDettaglioThreeComponent } from './Cap08/app-menu-multi-lev/app-product-dettaglio-three.component';


// import il routing module che ho creato x forChild
import { AdminModule } from './admin/admin.module';
import { AppHomeModuleComponent } from './Cap08/app-home-module/app-home-module.component';
import { AppUserModuleComponent } from './Cap08/app-user-module/app-user-module.component';
import { AppEmployeeComponent } from './Cap08/app-employee/app-employee.component';
import { AppHomeEmployeeComponent } from './Cap08/app-home-employee/app-home-employee.component';
import { CourseDetailComponent } from './Cap08/course-detail/course-detail.component';
import { CourseHomeComponent } from './Cap08/course-home/course-home.component';
import { EmployeeHomeComponent } from './Cap09/employee-home/employee-home.component';


// Services
import { EmployeeService } from './Cap09/dependecies/employee.service';





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
    SortNumbersPipe,
    AppSortNumberComponent,
    AppLetterCountComponent,
    LetterCountPipe,
    IncrementCountPipe,
    AppIncrementCountComponent,
    SumOfNumbersPipe,
    AppNavigationRouterlinkComponent,
    AppNavBarComponent,
    AppEmployeesComponent,
    PageNotFoundComponent,
    AppParentRouteComponent,
    AppChildRoute01Component,
    AppChildRoute02Component,
    AppRootPageComponent,
    AppMenuMultiLevComponent,
    AppProductsComponent,
    AppAboutComponent,
    AppContactComponent,
    AppProductDettaglioOneComponent,
    AppProductDettaglioTwoComponent,
    AppProductDettaglioThreeComponent,
    AppHomeModuleComponent,
    AppUserModuleComponent, 
    AppEmployeeComponent, 
    AppHomeEmployeeComponent, 
    CourseDetailComponent, 
    CourseHomeComponent, 
    EmployeeHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AdminModule,  // import il routing module che ho creato per forChild
  ],
  providers: [
   // provideClientHydration(),
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
