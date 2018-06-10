import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../companies.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  companies: Object;
  constructor(private company: CompaniesService) { }

  ngOnInit() {
    this.company.getCompanies().subscribe(
      company => this.companies = company
    );
  }

}
