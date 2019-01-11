import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgEasyListModule } from 'ng-easy-list';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgEasyListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
