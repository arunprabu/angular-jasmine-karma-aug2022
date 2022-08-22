// Write the tests here to test app component

// Test Pattern: AAA(Arrange, Act, Assert) / Given,When,Then

// Arrange or Given as per the test pattern
import { TestBed } from '@angular/core/testing'; 
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component'; // Comp imported for testing 

// describe, it, beforeEach are API's from jasmine

// group of related test specs - called as test suite
describe('AppComponent', () => {
  // ACT or When -of the test pattern
  beforeEach(async () => {
    // Test bed config -- similar to app.module
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent // Setting up the comp for testing
      ]
    }).compileComponents();
  });

  // test spec / case 
  it('should create the app', () => {
    // ACT or When -of the test pattern
    const fixture = TestBed.createComponent(AppComponent); // Taking up the comp for testing 
    
    // creating an obj for AppComp class for testing 
    const app = fixture.componentInstance; // Taking up app.comp.ts 

    // Assert or Then of the test pattern
    expect(app).toBeTruthy();
  });

  // test spec / case 
  it(`should have as title 'Welcome to Unit Testing in Angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance; // getting an instance of appcomp class
    expect(app.title).toEqual('Welcome to Unit Testing in Angular!!!');
  });

  // test spec / case 
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // detect the changes in app.comp.html
    const appHTML = fixture.nativeElement as HTMLElement; // taking up the app.comp.html for testing
    expect(appHTML.querySelector('h1')?.textContent).toEqual('Welcome to Unit Testing in Angular!!!');
  });

  it('should have a variable with year 2022', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.year).toBe(2022);
  });

  
});
