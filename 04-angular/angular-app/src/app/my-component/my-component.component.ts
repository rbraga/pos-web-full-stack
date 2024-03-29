import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-component',
  template: `
    <p>Custom property: {{ customProperty }} </p>
    <input type="text" [(ngModel)]="customProperty" />
    <button (click)="handleCustomEvent()">Send output</button>
    <ul>
      <li *ngFor="let item of items">
        <span 
          *ngIf="item !== 'item 3'"
          [style.background]="item === 'item 2' ? 'blue' : 'green'"
          [ngClass]="item === 'item 2' ? 'color-white' : ''"
        >{{item}}</span>
      </li>
    </ul>
`,
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {
  @Input() customProperty: string;
  @Output() myCustomOutput = new EventEmitter<string>();

  items = ['item 1', 'item 2', 'item 3', 'item 4']
  inputValue: string;

  constructor() { }

  handleCustomEvent() {
    this.myCustomOutput.emit(this.inputValue);
  }

}
