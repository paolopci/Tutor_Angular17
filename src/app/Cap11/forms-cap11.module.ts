import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppformComponent } from './appform/appform.component';
import { FormsModule } from '@angular/forms';
import { AppSubmitComponent } from './app-submit/app-submit.component';
import { AppTemplatedrivenComponent } from './app-templatedriven/app-templatedriven.component';



@NgModule({
  declarations: [
    AppformComponent,
    AppSubmitComponent,
    AppTemplatedrivenComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
})
export class FormsCap11Module { }
