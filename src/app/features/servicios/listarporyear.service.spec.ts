import { TestBed } from '@angular/core/testing';

import { ListarporyearService } from './listarporyear.service';

describe('ListarporyearService', () => {
  let service: ListarporyearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarporyearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
