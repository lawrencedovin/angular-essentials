import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgForLoopComponent } from './ng-for-loop/ng-for-loop.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgIfComponent } from './ng-if/ng-if.component';

@NgModule({
  declarations: [
    AppComponent,
    NgForLoopComponent,
    NgClassComponent,
    NgIfComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
