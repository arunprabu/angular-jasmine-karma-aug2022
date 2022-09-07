import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div>
      <h2>Home Component | Testing Pipes</h2>
      <p>{{randomTxt | ellipsis }}</p>
      <p>{{randomTxt | ellipsis: 20 }}</p>
      <p>{{randomTxt | ellipsis: 50 }}</p>

      <h2>Testing ngModel </h2>
      <input type="text" [(ngModel)]="personName">
      <span>{{personName | titlecase}}</span>

      <h2>Colorizer Directive - Demo</h2>
      <div appColorizer>
        Testing colorizer directive
      </div>
    </div>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  randomTxt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

  personName = ''
  constructor() { }

  ngOnInit(): void {
  }

}
