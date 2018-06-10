import { Component, OnInit } from '@angular/core';
import { IndicatorsService } from '../indicators.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.scss']
})
export class IndicatorsComponent implements OnInit {

  indicators: Object;
  constructor(private indicatorsService: IndicatorsService) { }

  ngOnInit() {
    this.indicatorsService.getRoe().subscribe(
      indicatorsService => this.indicators = indicatorsService
    );
  }

}
