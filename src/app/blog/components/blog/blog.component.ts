import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styles: [
  ]
})
export class BlogComponent implements OnInit {

  postList: any[] = [];

  constructor( private blogService: BlogService ) { }

  ngOnInit(): void {
    this.blogService.getPosts()
      .subscribe( (res: any) => {
        console.log(res);
        this.postList = res;
      });
  }

}
