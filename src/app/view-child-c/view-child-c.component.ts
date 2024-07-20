import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChildCompViewComponent } from './child-comp-view/child-comp-view.component';

@Component({
  selector: 'app-view-child-c',
  standalone: true,
  imports: [ChildCompViewComponent],
  templateUrl: './view-child-c.component.html',
  styleUrl: './view-child-c.component.scss'
})
export class ViewChildCComponent implements AfterViewInit {
  @ViewChild('highlight')
  marker!: ElementRef;

@ViewChildren('highlight1')highlight1!:QueryList<any>;

@ViewChild('viewChild')child!:ChildCompViewComponent
  constructor() {
    
  }
  
  ngAfterViewInit(): void {
    console.log(this.marker,'marker');
    this.marker.nativeElement.style.color="red"

    console.log(this.highlight1,'highlight1');

    this.highlight1.first.nativeElement.style.color="blue"
    this.highlight1.last.nativeElement.style.color="green"

  }

  dec() {
    this.child.dec();
  }

  inc() {
    this.child.inc();
  }
}
