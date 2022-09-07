import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorizer]'
})
export class ColorizerDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { 
    console.log('inside constructor');

    const divEl = this.elRef.nativeElement;
    console.log(divEl);

    this.renderer.setStyle(divEl, 'background-color', 'yellow');
    this.renderer.setStyle(divEl, 'height', '200px');
  }

}
