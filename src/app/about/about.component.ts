import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
    `
      .redText{
        color: red;
      }
    `
  ]
})
export class AboutComponent implements OnInit {

  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  handleIncrement(){
    this.counter += 1;
  }
}
