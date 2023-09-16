import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  techs = ['Angular', 'React', 'Vue'];
  show = false;

  idxTab: number = 0;

  changeTab(idxTab: number): void {
    console.log(idxTab);
    this.idxTab = idxTab;
  }
}
