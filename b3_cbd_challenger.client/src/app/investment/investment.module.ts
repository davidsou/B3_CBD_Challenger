import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { InvestmentFormComponent } from './components/investment-form/investment-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClient,
    InvestmentFormComponent
  ],
})
export class InvestmentModule { }
