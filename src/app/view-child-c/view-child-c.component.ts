import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child-c',
  standalone: true,
  imports: [],
  templateUrl: './view-child-c.component.html',
  styleUrl: './view-child-c.component.scss'
})
export class ViewChildCComponent implements AfterViewInit {
  @ViewChild('highlight')
  marker!: ElementRef;


  constructor() {
    
  }
  
  ngAfterViewInit(): void {
    console.log(this.marker,'marker');
    this.marker.nativeElement.style.color="red"
  }
}
