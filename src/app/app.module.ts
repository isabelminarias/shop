import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './homepage/home/home.component';
import { NavigationComponent } from './homepage/navigation/navigation.component';
import { StoryComponent } from './homepage/story/story.component';
import { ClientCarComponent } from './client/car/car.component';
import { ClientHomeComponent } from './client/home/home.component';
import { LoginComponent } from './homepage/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    StoryComponent,
    ClientCarComponent,
    ClientHomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
