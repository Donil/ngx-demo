import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './user/user.component';
import { SettingsComponent } from './settings/settings.component';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    UsersListComponent,
    UserComponent,
    SettingsComponent,
    AdminComponent
  ],
  providers: [
  ]
})
export class AdminModule { }
