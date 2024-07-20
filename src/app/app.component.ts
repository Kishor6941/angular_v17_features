import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ChildCompComponent } from "./child-comp/child-comp.component";
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ChildCompComponent, RouterLink]
})
export class AppComponent {
    http = inject(HttpClient)
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

ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
 this.http.get("https://jsonplaceholder.typicode.com/todos/1").subscribe((res)=>{
    
 })  
}
}
