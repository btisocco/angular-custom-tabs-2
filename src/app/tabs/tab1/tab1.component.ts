import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { TemplatePortal, Portal, ComponentPortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.css'],
})
export class Tab1Component implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('templatePortalContent', { static: false })
  templatePortalContent: TemplateRef<unknown>;
  @ViewChild('domPortalContent', { static: true })
  domPortalContent: ElementRef<HTMLElement>;

  selectedPortal: Portal<any>;
  componentPortal: ComponentPortal<ComponentPortalExample>;
  templatePortal: TemplatePortal<any>;

  constructor(private _viewContainerRef: ViewContainerRef) {}

  ngOnDestroy(): void {
    console.log('destroy Tab1');
  }

  ngOnInit(): void {
    console.log('estoy en 1');
  }

  ngAfterViewInit(): void {
    this.componentPortal = new ComponentPortal(ComponentPortalExample);
    this.templatePortal = new TemplatePortal(
      this.templatePortalContent,
      this._viewContainerRef
    );
  }

  selectPortal(componentPortal: ComponentPortal<ComponentPortalExample>): void {
    this.selectedPortal = componentPortal;
    console.log(this.selectedPortal);
    this.componentPortal = new ComponentPortal(ComponentPortalExample);
  }
}

@Component({
  selector: 'component-portal-example',
  template: 'Hello, this is a component portal',
})
export class ComponentPortalExample {}
