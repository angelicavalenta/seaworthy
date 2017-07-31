import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountComponent } from './account/account.component'
import { MapComponent } from './map/map.component'
import { BookComponent } from './book/book.component'

const appRoutes: Routes = [
  {path: 'profile', component: AccountComponent},
  {path: 'shipments', component: MapComponent},
  {path: 'book', component: BookComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ] //why??
})
export class AppRoutingModule {}
