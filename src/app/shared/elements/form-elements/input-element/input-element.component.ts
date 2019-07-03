import { Component, Input, AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'bg-input-element',
  templateUrl: './input-element.component.html',
  styleUrls: ['./input-element.component.scss']
})
export class InputElementComponent implements AfterViewInit {
  @Input() formGroup: FormGroup;
  @Input() formControl: string;
  @Input() public label: string;
  @Input() public type: string = 'text';
  @Input() public placeholder: string = 'type here...';
  @Input() public autocomplete: string = '';

  @Input() focusInput: boolean = false;
  
  constructor() { }

  ngAfterViewInit() {
    if (this.focusInput) {
      const inputEl: HTMLInputElement = document.querySelector(`input[name="${this.label}"]`);
      if (inputEl !== undefined) inputEl.focus();
    }

  }

}
