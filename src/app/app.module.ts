import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CompaniesComponent } from './companies/companies.component';
import { IndicatorsComponent } from './indicators/indicators.component';
import { IndicatorsService } from './indicators.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CompaniesComponent,
    IndicatorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [IndicatorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
