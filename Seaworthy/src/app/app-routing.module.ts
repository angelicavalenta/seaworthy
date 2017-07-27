import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountComponent } from './account/account.component'
import { MapComponent } from './map/map.component'

const appRoutes: Routes = [
  {path: 'profile', component: AccountComponent},
  {path: 'shipments', component: MapComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ] //why??
})
export class AppRoutingModule {}
