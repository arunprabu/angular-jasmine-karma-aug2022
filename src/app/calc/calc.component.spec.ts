import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcComponent } from './calc.component'; // taking up calc comp for testing

describe('CalcComponent', () => {
  let component: CalcComponent;
  let fixture: ComponentFixture<CalcComponent>;

  beforeEach(async () => {
    // similar to app module
    await TestBed.configureTestingModule({
      declarations: [ CalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcComponent);
    component = fixture.componentInstance; // taking up comp class for testing
    fixture.detectChanges(); // detecting changes in html of the comp
  });

  it('should create CalcComponent', () => {
    expect(component).toBeTruthy();
  });

  it('has Calculator as heading', () => {
    const calcHTML = fixture.nativeElement as HTMLElement; // taking up comp html for testing
    expect(calcHTML.querySelector('h2')?.textContent).toEqual('Calculator');
  });

  it('adds two numbers properly', () => {
    // sometimes multiple expectation are needed
    expect(component.add(10, 20)).toEqual(30);
    expect(component.add(5, 2)).toEqual(7);
  });

  it('should have return type number', () => {
    // checking the return type
    expect(component.add(10, 20)).not.toBeNaN();
  });
});
