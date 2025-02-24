import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NameFilterPipe, IdFilterPipe, TypeFilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NameFilterPipe,
    IdFilterPipe,
    TypeFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
