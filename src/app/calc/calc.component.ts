import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  template: `
    <div>
      <h2>Calculator</h2>
    </div>
  `,
  styles: [
  ]
})
export class CalcComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  add(a: number, b:number){
    return a + b;
  }


}
