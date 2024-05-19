import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { SwitchComponent } from './switch/switch.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DarkModeComponent } from './Cap03/dark-mode/dark-mode.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchComponent,
    CarouselComponent,
    DarkModeComponent
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
