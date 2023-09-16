import { NgModule } from '@angular/core';
import TabsComponent from './tabs.component';
import TabComponent from './tab.component';
import { CommonModule } from '@angular/common';
import { ComponentPortalExample, Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  imports: [CommonModule, PortalModule],
  declarations: [TabsComponent, TabComponent, Tab1Component, Tab2Component, ComponentPortalExample],
  exports: [TabsComponent, TabComponent, Tab1Component, Tab2Component, ComponentPortalExample],
})
export class TabsModule {}
