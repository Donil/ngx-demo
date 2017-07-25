import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { NavChildComponent } from './nav-child/nav-child.component';
import { NavChild2Component } from './nav-child-2/nav-child-2.component';

import { NoNavComponent } from './no-nav/no-nav.component';
import { NoNavChildComponent } from './no-nav-child/no-nav-child.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }, {
    path: 'home',
    component: NavComponent,
    children: [{
        path: 'nav-child',
        component: NavChildComponent
      }, {
        path: 'nav-child-2',
        component: NavChild2Component
      }
    ]
  }, {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  }, {
    path: 'client',
    loadChildren: './client/client.module#ClientModule'
  }
  // , {
  //   path: 'no-nav',
  //   component: NoNavComponent,
  //   children: [{
  //       path: 'no-nav-child',
  //       component: NoNavChildComponent
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
