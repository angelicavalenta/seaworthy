import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    [BrowserAnimationsModule],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
