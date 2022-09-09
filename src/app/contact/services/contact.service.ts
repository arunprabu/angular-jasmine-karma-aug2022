import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor( private http: HttpClient ) { 
    
  }

  createContact(formData: any){
    return this.http.post('https://jsonplaceholder.typicode.com/users', formData)
      .pipe( map( (res: any) => {
        console.log(res);
        return res;
      } ));
  }

  getContacts(){
    return [{
      id: 1, 
      name: 'Steve',
      phone: 32232323,
      email: 's@t.com'
    }];
  }

  


}
