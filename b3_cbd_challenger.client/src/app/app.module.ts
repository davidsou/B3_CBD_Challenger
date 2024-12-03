import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvestmentModule } from './investment/investment.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClient,
    AppRoutingModule,
    InvestmentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
