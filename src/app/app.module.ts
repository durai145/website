import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThalaippuComponent } from './thalaippu/thalaippu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VazhikattiComponent } from './vazhikatti/vazhikatti.component';

@NgModule({
  declarations: [
    AppComponent,
    ThalaippuComponent,
    VazhikattiComponent
  ],
  imports: [
    BrowserModule, NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
