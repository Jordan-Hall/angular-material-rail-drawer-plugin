import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDrawerRailDirective } from './drawer-rail.directive';

@NgModule({
  imports: [MatSidenavModule],
  declarations: [MatDrawerRailDirective],
  exports: [MatDrawerRailDirective],
})
export class DrawerRailModule {}
