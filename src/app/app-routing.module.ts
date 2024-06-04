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
import { AppHostBindingComponent } from './Cap05/app-host-binding/app-host-binding.component';
import { AppPickColorBindingComponent } from './Cap05/app-pick-color-binding/app-pick-color-binding.component';
import { AppBuildPipesComponent } from './Cap06/app-build-pipes/app-build-pipes.component';
import { AppSlidePipeComponent } from './Cap06/app-slide-pipe/app-slide-pipe.component';
import { AppPageNavigSlidePipeComponent } from './Cap06/app-page-navig-slide-pipe/app-page-navig-slide-pipe.component';
import { AppPoundtokgConvertComponent } from './Cap06/app-poundtokg-convert/app-poundtokg-convert.component';
import { AppJsonPipeComponent } from './Cap06/app-json-pipe/app-json-pipe.component';
import { AppTabledatatoJsonComponent } from './Cap06/app-tabledatato-json/app-tabledatato-json.component';
import { AppCustomPipeComponent } from './Cap07/app-custom-pipe/app-custom-pipe.component';
import { AppSortNumberComponent } from './Cap07/app-sort-number/app-sort-number.component';
import { AppLetterCountComponent } from './Cap07/app-letter-count/app-letter-count.component';
import { AppIncrementCountComponent } from './Cap07/app-increment-count/app-increment-count.component';
import { AppNavigationRouterlinkComponent } from './Cap08/app-navigation-routerlink/app-navigation-routerlink.component';
import { AppEmployeesComponent } from './Cap08/app-employees/app-employees.component';
import { PageNotFoundComponent } from './Cap08/page-not-found/page-not-found.component';
import { AppParentRouteComponent } from './Cap08/app-parent-route/app-parent-route.component';
import { AppChildRoute01Component } from './Cap08/app-child-route01/app-child-route01.component';
import { AppChildRoute02Component } from './Cap08/app-child-route02/app-child-route02.component';
import { AppRootPageComponent } from './Cap03/app-root-page/app-root-page.component';
import { AppMenuMultiLevComponent } from './Cap08/app-menu-multi-lev/app-menu-multi-lev.component';
import { AppProductsComponent } from './Cap08/app-menu-multi-lev/app-products.component';
import { AppProductDettaglioOneComponent } from './Cap08/app-menu-multi-lev/app-product-dettaglio-one.component';
import { AppProductDettaglioTwoComponent } from './Cap08/app-menu-multi-lev/app-product-dettaglio-two.component';
import { AppProductDettaglioThreeComponent } from './Cap08/app-menu-multi-lev/app-product-dettaglio-three.component';
import { AppHomeModuleComponent } from './Cap08/app-home-module/app-home-module.component';
import { AppEmployeeComponent } from './Cap08/app-employee/app-employee.component';
import { AppHomeEmployeeComponent } from './Cap08/app-home-employee/app-home-employee.component';
import { CourseDetailComponent } from './Cap08/course-detail/course-detail.component';
import { CourseHomeComponent } from './Cap08/course-home/course-home.component';
import { EmployeeHomeComponent } from './Cap09/employee-home/employee-home.component';
import { MyComponentComponent } from './Cap09/my-component/my-component.component';
import { AppCompTokenComponent } from './Cap010/app-comp-token/app-comp-token.component';
import { AppTokenUsevalueComponent } from './Cap010/app-token-usevalue/app-token-usevalue.component';
import { AppAdminComponent } from './Cap010/app-admin/app-admin.component';
import { AlertMsgComponent } from './Cap010/alert-msg/alert-msg.component';
import { UseFactoryHomeComponent } from './Cap010/use-factory-home/use-factory-home.component';
import { FactoryUsuseValueComponent } from './Cap010/factory-ususe-value/factory-ususe-value.component';
import { AppformComponent } from './Cap11/appform/appform.component';
import { AppSubmitComponent } from './Cap11/app-submit/app-submit.component';
import { AppTemplatedrivenComponent } from './Cap11/app-templatedriven/app-templatedriven.component';
import { ReacFormsComponent } from './Cap012/reac-forms/reac-forms.component';
import { FormGroupComponent } from './Cap012/form-group/form-group.component';
import { FormArrayComponent } from './Cap012/form-array/form-array.component';




const routes: Routes = [
  { path: 'home', component: AppRootPageComponent },
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
  { path: 'hostb', component: AppHostBindingComponent },
  { path: 'pick', component: AppPickColorBindingComponent },
  { path: 'buildp', component: AppBuildPipesComponent },
  { path: 'slidep', component: AppSlidePipeComponent },
  { path: 'pagenavs', component: AppPageNavigSlidePipeComponent },
  { path: 'pound', component: AppPoundtokgConvertComponent },
  { path: 'jsonp', component: AppJsonPipeComponent },
  { path: 'tablejson', component: AppTabledatatoJsonComponent },
  { path: 'apptext', component: AppCustomPipeComponent },
  { path: 'sortn', component: AppSortNumberComponent },
  { path: 'letterc', component: AppLetterCountComponent },
  { path: 'increment', component: AppIncrementCountComponent },
  { path: 'navlink', component: AppNavigationRouterlinkComponent },
  { path: 'homer', component: AppHomeModuleComponent },
  { path: 'emplo/:empName/:empId', component: AppEmployeesComponent },
  { path: 'employee/:id/:name', component: AppEmployeeComponent },
  { path: 'employee', component: AppEmployeeComponent },
  { path: 'emplohome', component: AppHomeEmployeeComponent },
  { path: 'courseDetail', component: CourseDetailComponent },
  { path: 'courseHome', component: CourseHomeComponent },
  { path: 'empHome', component: EmployeeHomeComponent },
  { path: 'myHoc', component: MyComponentComponent },
  { path: 'myTok', component: AppCompTokenComponent },
  { path: 'myuseValue', component: AppTokenUsevalueComponent },
  { path: 'appAdmin', component: AppAdminComponent },
  { path: 'appAlert', component: AlertMsgComponent },
  { path: 'useFactory', component: UseFactoryHomeComponent },
  { path: 'usefac', component: FactoryUsuseValueComponent },
  { path: 'appform11', component: AppformComponent },
  { path: 'appSubm', component: AppSubmitComponent },
  { path: 'appTmpdriven', component: AppTemplatedrivenComponent },
  { path: 'reacForms', component: ReacFormsComponent },
  { path: 'formGroup', component: FormGroupComponent },
  { path: 'formArray', component: FormArrayComponent },


  {
    path: 'parent', component: AppParentRouteComponent, children: [
      { path: 'child1', component: AppChildRoute01Component },
      { path: 'child2', component: AppChildRoute02Component }
    ]
  },
  { path: 'menulev', component: AppMenuMultiLevComponent },
  {  // Menu multilivello
    path: 'products', component: AppProductsComponent, children: [
      { path: 'prod03', redirectTo: 'prod01', pathMatch: 'prefix' },
      { path: 'prod01', component: AppProductDettaglioOneComponent },
      { path: 'prod02', component: AppProductDettaglioTwoComponent },
      { path: 'prod03', component: AppProductDettaglioThreeComponent },
    ]
  },

   //{ path: '**', component: PageNotFoundComponent },
//  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
