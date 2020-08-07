import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { NameFilterPipe, IdFilterPipe, TypeFilterPipe } from '../pipes/filter.pipe';
import { HomeComponent } from './home.component'

@NgModule({
  declarations: [
    NameFilterPipe,
    IdFilterPipe,
    TypeFilterPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
})
export class HomeModule { }
