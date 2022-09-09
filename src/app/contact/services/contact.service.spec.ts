import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ContactService } from './contact.service';

describe('ContactService', () => {
  let service: ContactService;
  let httpClientSpy:jasmine.SpyObj<HttpClient>

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

  beforeEach( () => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    // httpClientSpyPost = jasmine.createSpyObj('HttpClient',['post']);
    service = new ContactService(httpClientSpy);
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should call getContacts and get an array of obj', () => {
  //   expect(service.getContacts()).toEqual(mockContacts)
  // });

  // httpclientspy 
  // Refer line numbers: 9, 11, 27-30
  it('should return contacts',(done:DoneFn) => {
    httpClientSpy.get.and.returnValue(of(mockContacts))
    service.getContacts()
      .subscribe((res:any) => {
        expect(res).toEqual(mockContacts);
        done();
      }
    );
  })


});
