import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { Routes } from '@angular/router';

import { AutoGeneratedComponent } from './auto-generated/auto-generated.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full',
  },
  {
      path: 'auto-generated',
      component: AutoGeneratedComponent,
  },
  {
      path: 'home',
      component: HomeComponent,
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
