import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClientRoutingModule } from './client-routing.module';

import { ClientComponent } from './client.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroComponent } from './hero/hero.component';
import { SelectedHeroComponent } from './selected-hero/selected-hero.component';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule
  ],
  declarations: [
    HeroesListComponent,
    ClientComponent,
    HeroComponent,
    SelectedHeroComponent
  ]
})
export class ClientModule { }
