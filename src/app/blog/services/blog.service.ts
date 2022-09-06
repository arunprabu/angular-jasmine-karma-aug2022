import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor( private http: HttpClient) { }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts?_limit=6')
      .pipe( map( (res: any) => {
        console.log(res);
        return res;
      }));
  }
}
