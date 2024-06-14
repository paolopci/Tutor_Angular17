import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { Home06Component } from './home06/home06.component';
import { Create06Component } from './create06/create06.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    Home06Component,
    Create06Component
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ]
})
export class ProductsModule { }
