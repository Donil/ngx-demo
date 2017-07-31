import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientComponent } from './client.component';
import { HeroComponent } from './hero/hero.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { AuthGuardService, CanDiactivateGuardService } from '../core/services';

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
    }, {
      path: 'heroes/create',
      component: HeroComponent,
      canActivate: [AuthGuardService],
      canDeactivate: [CanDiactivateGuardService]
    }, {
      path: 'heroes/:id',
      component: HeroComponent,
      canActivate: [AuthGuardService],
      canDeactivate: [CanDiactivateGuardService]
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
