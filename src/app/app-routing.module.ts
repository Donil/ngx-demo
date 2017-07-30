import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './core/services';
import { LoginComponent } from './shared/login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'client'
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    canActivate: [AuthGuardService],
    canLoad: [AuthGuardService]
  }
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
