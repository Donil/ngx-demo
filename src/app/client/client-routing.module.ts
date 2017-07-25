import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientComponent } from './client.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';

const routes: Routes = [{
    path: '',
    component: ClientComponent,
    children: [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'heroes'
    }, {
      path: 'heroes',
      component: HeroesListComponent
    }]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ClientRoutingModule { }
