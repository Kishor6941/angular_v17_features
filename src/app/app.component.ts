import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ChildCompComponent } from "./child-comp/child-comp.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ChildCompComponent, RouterLink]
})
export class AppComponent {
//   nameList = [
//     {id : 1, name : "Kishor"},
//     {id : 2, name : "Sunil"},
//     {id : 3, name : "Vijay"},
//   ]
// name : string = '';
//   getData(event:string) {
// console.log(event)
// this.name = event;
//   }
}
