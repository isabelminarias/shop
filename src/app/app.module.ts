import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './homepage/home/home.component';
import { NavigationComponent } from './homepage/navigation/navigation.component';
import { StoryComponent } from './homepage/story/story.component';
import { ClientCarComponent } from './client/car/car.component';
import { ClientHomeComponent } from './client/home/home.component';
import { LoginComponent } from './homepage/login/login.component';
import { AddCarComponent } from './client/add-car/add-car.component';
import { ClientAppsComponent } from './client/apps/apps.component';
import { ClientAppComponent } from './client/app/app.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    StoryComponent,
    ClientCarComponent,
    ClientHomeComponent,
    LoginComponent,
    AddCarComponent,
    ClientAppsComponent,
    ClientAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
