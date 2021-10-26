import { TestBed } from '@angular/core/testing';

import { OlamundoService } from './olamundo.service';

describe('OlamundoService', () => {
  let service: OlamundoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OlamundoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
