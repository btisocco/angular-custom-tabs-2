import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
} from '@angular/core';

import TabComponent from './tab.component';

@Component({
  selector: 'ngx-tabs',
  template: `
    <div class="tabs-container">
      <ul class="nav nav-tabs">
        <li *ngFor="let tab of tabs; let idx = index" class="tab" [ngClass]="{'active': tab.active === true }" (click)="selectTab(tab, idx)">{{ tab.tabTitle }} </li>
      </ul>
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .tabs-container {
        height: 200px;
        margin:2px;
      }
      .tabs-container .tab{
        padding:5px;
        text-align:center;
        width:50px;
        // background-color:lightgray;
        cursor: pointer;

      }
      .tabs-container .tab:hover{
         
         border-radius:2px;
           opacity:90%;
      }
       .tabs-container .tab.active{
         color:white;
         background-color:gray;
        //  border-bottom:2px solid blue;
         }
    `,
  ],
})
export default class TabsComponent implements AfterContentInit, OnChanges {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @Output() idxTab = new EventEmitter<number>();

  ngAfterContentInit(): void {
    console.log(this.tabs);
    const activeTabs = this.tabs.filter((tab) => tab.active);

    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first, 0);
    }
  }

  selectTab(tab: TabComponent, idx: number) {
    this.tabs.toArray().forEach((tab) => (tab.active = false));
    tab.active = true;
    this.idxTab.emit(idx);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['idxTab']) {
      const nuevoIdxTab = changes['idxTab'].currentValue;
    }
  }
}
