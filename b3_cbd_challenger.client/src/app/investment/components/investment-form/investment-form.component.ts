import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { InvestmentService } from '../../services/investment.service';


@Component({
  selector: 'app-investment-form',
  standalone: true,  // Indica que este componente é standalone
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './investment-form.component.html',
  styleUrls: ['./investment-form.component.css'],

})
export class InvestmentFormComponent {
  investmentForm: FormGroup;
  result: any = null;

  constructor(private fb: FormBuilder, private investmentService: InvestmentService) {
    this.investmentForm = this.fb.group({
      initialValue: [null, [Validators.required, Validators.min(0)]],
      months: [null, [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit(): void {
    if (this.investmentForm.valid) {
      this.investmentService.calculateInvestment(this.investmentForm.value).subscribe(
        (response) => {
          this.result = response;
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
  }
}
