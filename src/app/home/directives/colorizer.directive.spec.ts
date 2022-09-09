import { Component, DebugElement, ElementRef, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ColorizerDirective } from './colorizer.directive';
@Component({
  template: `
    <div appColorizer>Example Element 1</div>
    <div>Example Element 2</div>
    <div appColorizer>Example Element 3</div>
  `
})
class TestComponent { }

describe('ColorizerDirective', () => {

  let fixture: ComponentFixture<TestComponent>;
  let des: DebugElement[]; 

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ ColorizerDirective, TestComponent ]
    })
    .createComponent(TestComponent);

    fixture.detectChanges(); // initial binding

    // all elements with an attached ColorizerDirective
    des = fixture.debugElement.queryAll(By.directive(ColorizerDirective));
  });

  it('should have 2 colorized element', () => {
    expect(des.length).toBe(2);
  });

  it('should have background "yellow"', () => {
    const bgColor = des[0].nativeElement.style.backgroundColor;
    expect(bgColor).toBe('yellow');
  });
 
});
