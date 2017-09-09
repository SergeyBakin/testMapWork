import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

import { MapService } from './service/map.service';
import { CustomCompileService } from './service/custom-compile.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MapService, CustomCompileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
