//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { AppComponent } from './app/app.component';
///*import { InvestmentModule } from './app/investment/investment.module';*/

//platformBrowserDynamic().bootstrapModule(AppComponent, {
//  ngZoneEventCoalescing: true,
//})
//  .catch(err => console.error(err));
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(ReactiveFormsModule),  // Inclui ReactiveFormsModule se necessário
    importProvidersFrom(HttpClientModule)
  ]
}).catch(err => console.error(err));
