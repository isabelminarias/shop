import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './homepage/home/home.component';
import { NavigationComponent } from './homepage/navigation/navigation.component';
import { StoryComponent } from './homepage/story/story.component';
import { ClientCarComponent } from './client/car/car.component';
import { ClientHomeComponent } from './client/home/home.component';
import { LoginComponent } from './homepage/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
  	path: 'story',
  	component: StoryComponent
  },
  {
    path: 'client',
    component: ClientHomeComponent
  },
  {
  	path: 'client/car',
  	component: ClientCarComponent
  },
  {
  	path: 'client/app',
  	component: ClientCarComponent
  },
  {
    path:'login', 
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
