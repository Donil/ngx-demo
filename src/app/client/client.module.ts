import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';

import { ClientComponent } from './client.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule
  ],
  declarations: [
    HeroesListComponent,
    ClientComponent
  ]
})
export class ClientModule { }
