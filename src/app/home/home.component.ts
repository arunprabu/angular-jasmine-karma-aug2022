import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div>
      <h2>Home Component | Testing Pipes</h2>
      <p>{{randomTxt | ellipsis }}</p>
      <p>{{randomTxt | ellipsis: 20 }}</p>
      <p>{{randomTxt | ellipsis: 50 }}</p>
    </div>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  randomTxt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

  constructor() { }

  ngOnInit(): void {
  }

}
