import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeListComponent } from './home-list/home-list.component';
import { Bintang1ListComponent } from './bintang1-list/bintang1-list.component';
import { Bintang2ListComponent } from './bintang2-list/bintang2-list.component';
import { Bintang3ListComponent } from './bintang3-list/bintang3-list.component';
import { Bintang4ListComponent } from './bintang4-list/bintang4-list.component';

const routes: Routes =
[
  { path: 'home' , component: HomeListComponent},
  { path: 'bintang1' , component: Bintang1ListComponent},
  { path: 'bintang2' , component: Bintang2ListComponent},
  { path: 'bintang3' , component: Bintang3ListComponent},
  { path: 'bintang4' , component: Bintang4ListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeListComponent, Bintang1ListComponent, Bintang2ListComponent, Bintang3ListComponent, Bintang4ListComponent]
