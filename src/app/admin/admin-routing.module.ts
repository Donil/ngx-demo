import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { SettingsComponent } from './settings/settings.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [{
    path: '',
    component: AdminComponent,
    children: [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'settings'
    }, {
      path: 'settings',
      component: SettingsComponent
    }, {
      path: 'users',
      component: UsersListComponent
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
export class AdminRoutingModule { }
