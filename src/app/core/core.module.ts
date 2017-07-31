import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService, HeroesService, AuthGuardService, CanDiactivateGuardService } from './services';
import './rxjs.operators';

/**
 * Core module.
 */
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
  ],
  providers: [
    UsersService,
    HeroesService,
    AuthGuardService,
    CanDiactivateGuardService
  ],
  declarations: []
})
export class CoreModule { }
