import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // testing inline style
  it('should have yellow bg in h2', () => {
    const aboutHTML = fixture.nativeElement as HTMLElement;
    const bgColor = aboutHTML.querySelector('h2')?.style.backgroundColor;
    // expect(bgColor).toBe('red'); // Not Recommended if you use color code #ff0000 or rgb(255, 0, 0)
    expect(bgColor).toBe('rgb(255, 0, 0)');
  });

  // TODO: Testing css class 'redText' 

  // counter value defaults to 0
  it('has default counter value 0', () => {
    expect(component.counter).toEqual(0);
  });

  // should increment and decrement counter value
  it('should increment counter value correctly', () =>{
    component.handleIncrement();
    expect(component.counter).toEqual(1);
    component.handleIncrement();
    expect(component.counter).toEqual(2);
  });  

  // TODO: Try decrement 

  // let's test event handler from html itself for increment
  it('should increment value in html on click of html increment button', () => {
    // find the button and // trigger the click thru program
    fixture.debugElement.query(By.css('.incrementBtn')).triggerEventHandler('click', null);
    
    // check the updates in the html 
    fixture.detectChanges();
    const counterValue = fixture.debugElement.query(By.css('.counterValue')).nativeElement.innerText;
    expect(counterValue).toBe('1');
  });

  //TODO: let's test event handler from html itself for decrement

});
