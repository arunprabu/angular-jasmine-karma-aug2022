import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { BlogService } from '../../services/blog.service';

import { BlogComponent } from './blog.component';

class MockUserService {
  isLoggedIn = true;
  user = { name: 'Test User'};
}


describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;
  let blogService: BlogService;

  
  const mockPostList: any[] = [
    {
      id: 45,
      title: "my first post",
      body: "est natus reiciendis nihil possimus aut providentex et dolor"
    },
    {
      id: 46,
      title: "aut quo modi neque nostrum ducimus",
      body: "voluptatem quisquam iste\nvoluptatibus natus officiis facilis doloremquis"
    }
  ];

  beforeEach(async () => {
    // similar to app module
    await TestBed.configureTestingModule({
      declarations: [ BlogComponent ],
      imports: [
        HttpClientModule
      ],
      // setting up mock
      providers: [
        {
          provide: BlogService,
          useValue: {
            // mocking getPosts with mockPostList
            getPosts: () => of(mockPostList)
          }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    blogService = TestBed.inject(BlogService); // important as we dep inject this service in comp
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Not Recommended 
  /* 
  it('has postList with 6 items', ((done) => {
    component.ngOnInit();
    setTimeout( () => {
      expect(component.postList.length).toEqual(6);
      done();
    }, 4000);
  })); 
  */

  /* 
    3 Disadvantages of Testing REST API
      1. Time Consuming
      2. Availability of the REST API is a concern ( api may be in dev, api may be down)
      3. No guarantee for the sample data to be present

      Solution is to go for: Mocking API Calls
  */

  it('should have postList from service [MOCKING]', ()=>{
    expect(component.postList.length).toEqual(2);
    expect(component.postList).toEqual(mockPostList);
  });

  it(`should have 'my first post' in html`, () => {
    // The following is working because we have fixture.detectChanges() in beforeEach
    const blogHTML = fixture.nativeElement as HTMLElement;
    const cardTitlEl = blogHTML.querySelector('.card-title');
    expect(cardTitlEl?.textContent).toBe('my first post');
  });

});
