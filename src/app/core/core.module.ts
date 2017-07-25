import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from './services';

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
    UsersService
  ],
  declarations: []
})
export class CoreModule { }
