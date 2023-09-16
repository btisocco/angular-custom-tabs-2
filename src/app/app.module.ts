import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import {CommonModule} from '@angular/common'
import { AppComponent } from "./app.component";

import { TabsModule } from "./tabs";

@NgModule({
  imports: [BrowserModule, FormsModule,CommonModule,TabsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
