import { TestBed } from '@angular/core/testing';

import { CursodestacadoService } from './cursodestacado.service';

describe('CursodestacadoService', () => {
  let service: CursodestacadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursodestacadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
