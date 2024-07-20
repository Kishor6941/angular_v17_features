import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-comp-view',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child-comp-view.component.html',
  styleUrl: './child-comp-view.component.scss'
})
export class ChildCompViewComponent {
  counter = 0;
 

inc() {
this.counter = this.counter +  1;
}

  dec() {
    this.counter = this.counter - 1;
  }
}
