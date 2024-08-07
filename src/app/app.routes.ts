import { Routes } from '@angular/router';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { LogoutComponent } from './logout/logout.component';
import { AccessDeinedComponent } from '../services/access-deined/access-deined.component';
import { authGuards } from '../services/guards/authGuards';

export const routes: Routes = [
    {
        path : "child-comp",
        component : ChildCompComponent
    }, 
    {
        path : "second-comp",
        loadComponent : () => import("./second/second.component").then(c => c.SecondComponent)
    },
    {
        path : 'home',
        component : HomeComponent,
        canActivate:[authGuards]
    },
    {
        path : 'user',
        component : UserComponent,
        canActivate:[authGuards]
    },
    {
        path : 'admin',
        component : AdminComponent,
        canActivate:[authGuards]
    },
    {
        path : 'logout',
        component : LogoutComponent,
    },
    {
        path : 'access-denied',
        component : AccessDeinedComponent,
    }, {
        path : 'defer',
        loadComponent : () => import("./defer-example/defer-example.component").then((comp) => comp.DeferExampleComponent)
    },
    {
        path : 'view-child',
        loadComponent : () => import("./view-child-c/view-child-c.component").then((c) => c.ViewChildCComponent)
    },
    {
        path : 'content-project',
        loadComponent : () => import("./content-projection/content-projection.component").then((c) => c.ContentProjectionComponent)
    },
   {
    path : "signalc",
    loadComponent : () =>import("./signal-c/signal-c.component").then((c) => c.SignalCComponent)
   }
];
