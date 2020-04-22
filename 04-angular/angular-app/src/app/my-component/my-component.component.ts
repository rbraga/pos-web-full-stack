import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-component',
  template: `
    <p>Custom property {{ customProperty }} </p>
    <button (click)="handleCustomEvent()">Send output</button>
    <ul>
      <li *ngFor="let item of items">
        <span *ngIf="item !== 'item 3'">{{item}}</span>
      </li>
    </ul>
`,
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {
  @Input() customProperty: string;
  @Output() myCustomOutput = new EventEmitter<string>();

  items = ['item 1', 'item 2', 'item 3', 'item 4']

  constructor() { }

  handleCustomEvent() {
    this.myCustomOutput.emit('Sending custom output');
  }

}
