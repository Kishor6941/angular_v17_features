import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  standalone: true,
  imports: [],
  templateUrl: './child-comp.component.html',
  styleUrl: './child-comp.component.scss'
})
export class ChildCompComponent {
@Input({required : true}) userList: any;
@Output() newItem = new EventEmitter<string>();


sendToParent() {
  this.newItem.emit('Kishor')
}
}
