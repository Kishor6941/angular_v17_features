import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-projection',
  standalone: true,
  imports: [],
  templateUrl: './child-projection.component.html',
  styleUrl: './child-projection.component.scss'
})
export class ChildProjectionComponent {
@Input({required:true})productList : { id: number; name: string; price: string; }[] | undefined
}
