import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { IndicatorsComponent } from './indicators/indicators.component';

const routes: Routes = [
  {
    path: '',
    component: CompaniesComponent
  },
  {
    path: 'details/:cvmCode',
    component: IndicatorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
