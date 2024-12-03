import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  private apiUrl = 'https://localhost:7104/CBD'; 

  constructor(private http: HttpClient) { }

  calculateInvestment(data: { initialValue: number; months: number }): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
