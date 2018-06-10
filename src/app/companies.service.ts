import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  private baseUrl:string = 'http://localhost:8080/fundamentos';
  constructor(private http: HttpClient) { }
  
  getCompanies(){
    return this.http.get(this.baseUrl+'/empresas')
  }
}
