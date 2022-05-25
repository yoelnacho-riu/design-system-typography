import { Component } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent {
  isInspect: boolean;

  constructor() {
    this.isInspect = false;
  }

  toggle() {
    const bodyElement = document.body;

    if (bodyElement && this.isInspect) {
      // remove existing class (needed if theme is being changed)
      bodyElement.classList.remove('inspect');
    } else {
      // add next theme class
      bodyElement.classList.add('inspect');
    }

    this.isInspect = !this.isInspect;
  }
}
