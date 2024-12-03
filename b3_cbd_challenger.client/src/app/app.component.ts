import { Component } from '@angular/core';
import { InvestmentFormComponent } from './investment/components/investment-form/investment-form.component';

@Component({
  selector: 'app-root',
  standalone: true,  // Indica que este componente é standalone
  imports: [InvestmentFormComponent],
  template: `
    <div class="container">
      <h1>Investment Calculator</h1>
      <app-investment-form></app-investment-form>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
