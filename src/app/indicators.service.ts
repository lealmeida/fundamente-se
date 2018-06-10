import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IndicatorsService {

  private baseUrl:string = 'http://localhost:8080/fundamentos/roe?codigoCvm=7617';
  constructor(private http: HttpClient) { }

    getRoe(){
    return this.http.get(this.baseUrl)
  }
}
