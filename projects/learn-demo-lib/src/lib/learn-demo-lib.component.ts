import { HttpClient } from '@angular/common/http';
import { Component, inject, Input } from '@angular/core';

@Component({
  selector: 'learn-demo-lib',
  standalone: true,
  imports: [],
  template: `
    <h3>
      Angular Lib for learning purpose created by {{name}}
    </h3>
  `,
  styles: ``
})
export class LearnDemoLibComponent {
  @Input('name') name : string | undefined
}
