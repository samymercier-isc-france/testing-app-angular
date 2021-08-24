import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LotteryPageComponent } from './pages/lottery-page/lottery-page.component';
import { HomeWelcomeComponent } from './components/home-welcome/home-welcome.component';
import { LotteryInfoHeaderComponent } from './pages/lottery-page/lottery-info-header/lottery-info-header.component';
import { LotterySpinningWheelComponent } from './pages/lottery-page/lottery-spinning-wheel/lottery-spinning-wheel.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginPageComponent,
    NavigationBarComponent,
    NotFoundComponent,
    LotteryPageComponent,
    HomeWelcomeComponent,
    LotteryInfoHeaderComponent,
    LotterySpinningWheelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
