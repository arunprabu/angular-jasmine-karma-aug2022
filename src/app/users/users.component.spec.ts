import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have isLoading true by default', () => {
    expect(component.isLoading).toBeTrue();
  });

  // Approach #1 [RECOMMENDED]
  it('has London as city - Approach #1', fakeAsync(() => {
    component.ngOnInit();
    tick(4001);
    expect(component.isLoading).toBeFalse();
    expect(component.myCity).toEqual('London');
  }));

  // Approach #2 
  it('has London as city - Approach #2', ((done) => {
    component.ngOnInit();

    setTimeout( () => {
      expect(component.isLoading).toBeFalse();
      expect(component.myCity).toEqual('London');
      done();
    }, 4001);
  }));

  it('should have 2 elements in userList array', fakeAsync(() => {
    component.ngOnInit();
    tick(4001);
    expect(component.userList.length).toEqual(2);
  }));

  it('should render atleast one user in HTML', fakeAsync(() => {
    component.ngOnInit();
    tick(4001);

    fixture.detectChanges();  // to get the updated html after initial rendering
    const userNameEl = fixture.nativeElement.querySelector('.userName');
    expect(userNameEl?.innerText).toContain('John Williams');
  }));
});
