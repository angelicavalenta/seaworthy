import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AccountComponent } from './account/account.component';
import { MapComponent } from './map/map.component';
import { AppRoutingModule } from './app-routing.module'
import { MdInputModule } from '@angular/material';
import { MdAutocompleteModule } from '@angular/material';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AccountComponent,
    MapComponent,
    BookComponent
  ],
  imports: [
    MdAutocompleteModule,
    MdInputModule,
    BrowserModule,
    [BrowserAnimationsModule],
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
