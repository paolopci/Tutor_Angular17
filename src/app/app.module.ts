import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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
import { AppCompTokenComponent } from './Cap010/app-comp-token/app-comp-token.component';
import { LogMessage1Service } from './Cap010/services/log-message1.service';
import { LogMessage2Service } from './Cap010/services/log-message2.service';
import { AppTokenObjectComponent } from './Cap010/app-token-object/app-token-object.component';
import { AppTokenUsevalueComponent } from './Cap010/app-token-usevalue/app-token-usevalue.component';
import { AppAdminComponent } from './Cap010/app-admin/app-admin.component';
import { ADMIN_DATA } from './Cap010/ADMIN_DATA/admin-data';
import { AdminDataService } from './Cap010/services/admin-data.service';
import { AlertMessage1Service } from './Cap010/services/alert-message1.service';
import { AlertMessage2Service } from './Cap010/services/alert-message2.service';
import { AlertMsgComponent } from './Cap010/alert-msg/alert-msg.component';
import { UseFactoryHomeComponent } from './Cap010/use-factory-home/use-factory-home.component';
import { MessageService } from './Cap010/services/message.service';
import { AppConfigService } from './Cap010/services/app-config.service';
import { AppUpdateService } from './Cap010/services/app-update.service';
import { FactoryUsuseValueComponent } from './Cap010/factory-ususe-value/factory-ususe-value.component';
import { FormsCap11Module } from './Cap11/forms-cap11.module';
import { ReacFormsComponent } from './Cap012/reac-forms/reac-forms.component';
import { FormGroupComponent } from './Cap012/form-group/form-group.component';
import { FormArrayComponent } from './Cap012/form-array/form-array.component';
import { FormBuilderComponent } from './Cap012/form-builder/form-builder.component';
import { ValidationFormControlsComponent } from './Cap012/validation-form-controls/validation-form-controls.component';
import { MultiStepReactiveFormComponent } from './Cap012/multi-step-reactive-form/multi-step-reactive-form.component';
import { LoginMultiValidationsComponent } from './Cap012/login-multi-validations/login-multi-validations.component';
import { CustomUrlValidatorComponent } from './Cap013/custom-url-validator/custom-url-validator.component';
import { AdminComponent } from './Cap014/admin/admin.component';
import { MycomComponent } from './Cap014/admin/mycom.component';
import { HomeComponent } from './Cap014/home/home.component';
import { LoginFormComponent } from './Cap014/home/login-form.component';
import { HomeChildParentComponent } from './Cap014/home-child-parent/home-child-parent.component';
import { Child1Component } from './Cap014/home-child-parent/child1/child1.component';
import { Child2Component } from './Cap014/home-child-parent/child2/child2.component';
import { Admin01Component } from './Cap014/formLogin/admin01/admin01.component';
import { Login01Component } from './Cap014/formLogin/login01/login01.component';
import { Admin02Component } from './Cap014/CanLoad/admin02/admin02.component';
import { User02Component } from './Cap014/CanLoad/user02/user02.component';
import { Home02Component } from './Cap014/CanLoad/home02/home02.component';
import { User03Component } from './Cap014/CanMatch/user03/user03.component';
import { Admin03Component } from './Cap014/CanMatch/admin03/admin03.component';
import { Home03Component } from './Cap014/CanMatch/home03/home03.component';
import { HomeCompComponent } from './Cap015/example02/home-comp/home-comp.component';
import { TestDeferCompComponent } from './Cap015/example05/test-defer-comp/test-defer-comp.component';
import { HomeDeferCompComponent } from './Cap015/example05/home-defer-comp/home-defer-comp.component';
import { Homerxjs01Component } from './Cap016/example01/homerxjs01/homerxjs01.component';
import { Homerxjs02Component } from './Cap016/example02/homerxjs02/homerxjs02.component';
import { Homerxjs03Component } from './Cap016/example03/homerxjs03/homerxjs03.component';
import { Homerxjs04Component } from './Cap016/example04/homerxjs04/homerxjs04.component';
import { Homerxjs05Component } from './Cap016/example05/homerxjs05/homerxjs05.component';
import { Rxjs01Component } from './Cap017/example01/rxjs01/rxjs01.component';
import { Rxjs02Component } from './Cap017/example02/rxjs02/rxjs02.component';
import { Rxjs03Component } from './Cap017/example03/rxjs03/rxjs03.component';




export function showGreetingMessage(): string {
  const currentHour = new Date().getHours();
  let greetingMessage: string = '';

  if (currentHour > 0 && currentHour <= 12) {
    greetingMessage = 'Buongiorno Paolo!';
  } else {
    greetingMessage = 'Buon pomeriggio Paolo!';
  }
  return greetingMessage;
}



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
    EmployeeHomeComponent,
    AppCompTokenComponent,
    AppTokenObjectComponent,
    AppTokenUsevalueComponent,
    AppAdminComponent,
    AlertMsgComponent,
    UseFactoryHomeComponent,
    FactoryUsuseValueComponent,
    ReacFormsComponent,
    FormGroupComponent,
    FormArrayComponent,
    FormBuilderComponent,
    ValidationFormControlsComponent,
    MultiStepReactiveFormComponent,
    LoginMultiValidationsComponent,
    CustomUrlValidatorComponent,
    AdminComponent,
    MycomComponent,
    HomeComponent,
    LoginFormComponent,
    HomeChildParentComponent,
    Child1Component,
    Child2Component,
    Admin01Component,
    Login01Component,
    Admin02Component,
    User02Component,
    Home02Component,
    User03Component,
    Admin03Component,
    Home03Component,
    HomeCompComponent,
    TestDeferCompComponent,
    HomeDeferCompComponent,
    Homerxjs01Component,
    Homerxjs02Component,
    Homerxjs03Component,
    Homerxjs04Component,
    Homerxjs05Component,
    Rxjs01Component,
    Rxjs02Component,
    Rxjs03Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AdminModule,  // import il routing module che ho creato per forChild
    FormsCap11Module,
    ReactiveFormsModule
  ],
  providers: [
    // provideClientHydration(),
    EmployeeService,
    // esempio di Type Token , in questo caso l'ultimo sorascrive il precedente,
    // che non viene mai usato.
    // { provide: LogMessage1Service, useClass: LogMessage1Service },
    // { provide: LogMessage1Service, useClass: LogMessage2Service },
    { provide: 'LOG_MSG1', useClass: LogMessage1Service },
    // fornisco un valore al token (STR_MSG) di tipo stringa `This is the string message`
    { provide: 'STR_MSG', useValue: 'This is the string message' },
    // fornisco un valore costante alla dependecy
    AdminDataService,
    { provide: ADMIN_DATA, useValue: ADMIN_DATA },
    AlertMessage1Service,
    {
      provide: AlertMessage2Service, useExisting: AlertMessage1Service
    },
    // AlertMessage2Service,
    // {
    //   provide: AlertMessage1Service, useExisting: AlertMessage2Service
    // },
    {
      provide: MessageService, useFactory: () => { return new MessageService(); }
    },
    // useFactory with deps
    AppConfigService,
    {
      provide: AppUpdateService,
      useFactory: (configService: AppConfigService) => {
        const config = configService.getAppConfig();
        return new AppUpdateService(config);
      },
      deps: [AppConfigService]
    },
    // esempio differenze tra useFactory & useValue 
    // guarda la function che ho scritto alla riga 97
    // export function showGreetingMessage(): .....
    {
      provide: 'GREETING_MESSAGE_FACTORY', // my Token in useFactory
      useFactory: showGreetingMessage // ritorna un valore che è dinamico.
    },
    {
      provide: 'GREETING_MESSAGE_VALUE', // my Token in useValue
      useValue: 'Ciaooooooo'  // useValue ritorna un valore statico.
    }


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
