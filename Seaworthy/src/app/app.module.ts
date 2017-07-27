import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AccountComponent } from './account/account.component';
import { MapComponent } from './map/map.component';
import { AppRoutingModule } from './app-routing.module'


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AccountComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    [BrowserAnimationsModule],
    CommonModule,
    FormsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCjU3_9873uVzSoXU50oV6pYyB1W0ExKBE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
