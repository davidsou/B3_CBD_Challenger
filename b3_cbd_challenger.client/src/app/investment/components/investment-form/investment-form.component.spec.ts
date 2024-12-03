import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { InvestmentFormComponent } from './investment-form.component';
import { InvestmentService } from '../../services/investment.service';
import { of } from 'rxjs';

describe('InvestmentFormComponent', () => {
  let component: InvestmentFormComponent;
  let fixture: ComponentFixture<InvestmentFormComponent>;
  let investmentService: InvestmentService;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvestmentFormComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      providers: [InvestmentService],
    }).compileComponents();

    fixture = TestBed.createComponent(InvestmentFormComponent);
    component = fixture.componentInstance;
    investmentService = TestBed.inject(InvestmentService);
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with two controls', () => {
    expect(component.investmentForm.contains('value')).toBeTruthy();
    expect(component.investmentForm.contains('months')).toBeTruthy();
  });

  it('should make the form controls required', () => {
    const valueControl = component.investmentForm.get('value');
    const monthsControl = component.investmentForm.get('months');

    valueControl?.setValue(null);
    monthsControl?.setValue(null);

    expect(valueControl?.valid).toBeFalsy();
    expect(monthsControl?.valid).toBeFalsy();
  });

  it('should call the service and set the result on form submit', () => {
    const mockResponse = {
      value: 1000,
      months: 12,
      rendimentobruto: 150,
      rendimentoliquido: 120,
      taxaaplicada: 0.9
    };

    spyOn(investmentService, 'calculateInvestment').and.returnValue(of(mockResponse));

    component.investmentForm.setValue({ value: 1000, months: 12 });
    component.onSubmit();

    expect(investmentService.calculateInvestment).toHaveBeenCalledWith({ value: 1000, months: 12 });
    expect(component.result).toEqual(mockResponse);
  });

  it('should not call the service if the form is invalid', () => {
    spyOn(investmentService, 'calculateInvestment');

    component.investmentForm.setValue({ value: null, months: 12 });
    component.onSubmit();

    expect(investmentService.calculateInvestment).not.toHaveBeenCalled();
  });

  it('should handle API errors gracefully', () => {
    spyOn(investmentService, 'calculateInvestment').and.returnValue(of(undefined));
    spyOn(console, 'error');

    component.investmentForm.setValue({ value: 1000, months: 12 });
    component.onSubmit();

    expect(console.error).not.toHaveBeenCalledWith(jasmine.anything());
  });
});
