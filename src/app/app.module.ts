import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NavChildComponent } from './nav-child/nav-child.component';
import { NoNavChildComponent } from './no-nav-child/no-nav-child.component';
import { NavChild2Component } from './nav-child-2/nav-child-2.component';
import { NoNavComponent } from './no-nav/no-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavChildComponent,
    NoNavChildComponent,
    NavChild2Component,
    NoNavComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
