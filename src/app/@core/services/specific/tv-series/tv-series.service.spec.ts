/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TvSeriesService } from './tv-series.service';

describe('Service: TvSeries', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TvSeriesService]
    });
  });

  it('should ...', inject([TvSeriesService], (service: TvSeriesService) => {
    expect(service).toBeTruthy();
  }));
});
