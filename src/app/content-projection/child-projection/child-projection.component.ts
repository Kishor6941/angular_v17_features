import { AfterContentChecked, AfterContentInit, Component, ContentChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-child-projection',
  standalone: true,
  imports: [],
  templateUrl: './child-projection.component.html',
  styleUrl: './child-projection.component.scss'
})
export class ChildProjectionComponent implements AfterContentInit, AfterContentChecked{
@Input({required:true})productList : { id: number; name: string; price: string; }[] | undefined
@ContentChild('childData') contentChild!:ElementRef;

color : string = 'red'
ngAfterContentInit(): void {
  //Called after ngOnInit when the component's or directive's content has been initialized.
  //Add 'implements AfterContentInit' to the class.
  console.log(this.contentChild);
  
  this.contentChild?.nativeElement?.setAttribute("style",`color:${this.color}`)
}
changeColor() {
this.color = 'green'
}
ngAfterContentChecked(): void {
  //Called after every check of the component's or directive's content.
  //Add 'implements AfterContentChecked' to the class.
  this.contentChild?.nativeElement?.setAttribute("style",`color:${this.color}`)
}
}
