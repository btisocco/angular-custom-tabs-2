import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.css'],
})
export class Tab2Component implements OnInit, OnDestroy {
  @Input() title: string = '';
  ngOnDestroy(): void {
    console.log('destroy Tab2');
  }

  ngOnInit(): void {
    console.log('estoy en 2');
  }
}
