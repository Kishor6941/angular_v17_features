import { Component } from '@angular/core';
import { ChildProjectionComponent } from './child-projection/child-projection.component';

@Component({
  selector: 'app-content-projection',
  standalone: true,
  imports: [ChildProjectionComponent],
  templateUrl: './content-projection.component.html',
  styleUrl: './content-projection.component.scss'
})
export class ContentProjectionComponent {
productList = [
  {id:1, name : 'ACS', price : '100'},
  {id:2, name : 'Phones', price : '2000'},
  {id:3, name : 'Fashion', price : '5000'},
  {id:4, name : 'Electronics', price : '3000'},
]

topProductList = [
  {id:1, name : 'Laptop', price : '100'},
  {id:2, name : 'Mobile', price : '2000'},
  {id:3, name : 'Freezer', price : '5000'},
  {id:4, name : 'Watch', price : '3000'},
]
}
