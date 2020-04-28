import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from '../shared/home/home.component';
import { AboutComponent } from '../shared/about/about.component';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class ApplicationRouterModule { }
