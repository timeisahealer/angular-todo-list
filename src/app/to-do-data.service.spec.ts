import { TestBed, inject } from '@angular/core/testing';

import { ToDoDataService } from './to-do-data.service';

describe('ToDoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToDoDataService]
    });
  });

  it('should be created', inject([ToDoDataService], (service: ToDoDataService) => {
    expect(service).toBeTruthy();
  }));
});
