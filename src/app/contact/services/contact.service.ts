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
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .pipe( map( (res: any) => {
        console.log(res);
        return res;
      } ));
  }

  


}
