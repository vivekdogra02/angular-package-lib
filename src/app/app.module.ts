import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgComponentsVdModule } from 'projects/ng-components-vd/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgComponentsVdModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
