import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-component',
  template: `
    <p>Custom property {{ customProperty }} </p>
    <button (click)="handleCustomEvent()">Send output</button>
`,
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {
  @Input() customProperty: string;
  @Output() myCustomOutput = new EventEmitter<string>();

  constructor() { }

  handleCustomEvent() {
    this.myCustomOutput.emit('Sending custom output');
  }

}
