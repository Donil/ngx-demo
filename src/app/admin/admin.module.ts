import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './user/user.component';
import { SettingsComponent } from './settings/settings.component';
import { AdminComponent } from './admin.component';
import { AdminGuardService } from './admin-guard.service';

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
    AdminGuardService
  ]
})
export class AdminModule { }
