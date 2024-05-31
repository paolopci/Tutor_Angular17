import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppformComponent } from './appform/appform.component';
import { FormsModule } from '@angular/forms';
import { AppSubmitComponent } from './app-submit/app-submit.component';



@NgModule({
  declarations: [
    AppformComponent,
    AppSubmitComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
})
export class FormsCap11Module { }
