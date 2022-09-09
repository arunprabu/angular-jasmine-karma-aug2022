import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ContactService } from './contact.service';

describe('ContactService', () => {
  let service: ContactService;
  let mockContacts: any[] = [{
    id: 1, 
    name: 'Steve',
    phone: 32232323,
    email: 's@t.com'
  }];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(ContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getContacts and get an array of obj', () => {
    expect(service.getContacts()).toEqual(mockContacts)
  });

  // httpclientspy
});
