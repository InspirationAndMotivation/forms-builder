import { TestBed } from '@angular/core/testing';

import { DnDService } from './dnd.service';

describe('DnDService', () => {
  let service: DnDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DnDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
