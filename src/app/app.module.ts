import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { UIModule } from '@tanbo/ui';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AppService } from './app.service';

import { HomeComponent } from '../pages/home/home.component';
import { StarrySkyComponent } from '../pages/starry-sky/starry-sky.component';
import { BannerComponent } from '../pages/banner/banner.component';

@NgModule({
  imports: [
    UIModule.forRoot(),
    BrowserAnimationsModule,
    BrowserModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    StarrySkyComponent,
    BannerComponent
  ],
  providers: [
    AppService, {
      provide: APP_BASE_HREF,
      useValue: '/'
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
