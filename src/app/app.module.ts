import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailTitanesComponent } from './detail-titanes/detail-titanes.component';


@NgModule({
  declarations: [
    AppComponent,
    EjemploComponent,
    DetailTitanesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
