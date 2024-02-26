import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { SmartScrollComponent } from './views/smart-scroll/smart-scroll.component';
import { RecentComponent } from './views/recent/recent.component';
import { CarouselComponent } from './views/carousel/carousel.component';
import {SlickCarouselModule} from "ngx-slick-carousel";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SmartScrollComponent,
    RecentComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
