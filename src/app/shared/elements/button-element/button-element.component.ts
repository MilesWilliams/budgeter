import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bg-button-element',
  templateUrl: './button-element.component.html',
  styleUrls: ['./button-element.component.scss']
})
export class ButtonElementComponent implements OnInit {
  @Input() size: 'small' | 'default' | 'large' = 'default';

  constructor() { }

  ngOnInit() {
  }

}
