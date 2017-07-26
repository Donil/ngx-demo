import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService, HeroesService } from './services';

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
    HeroesService
  ],
  declarations: []
})
export class CoreModule { }
